// Payment receipt upload handling for SQLite auth server
import express from 'express'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import jwt from 'jsonwebtoken'
import Database from 'better-sqlite3'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production'

// Ensure uploads directory exists
const uploadsDir = path.resolve(__dirname, '..', '..', 'uploads', 'receipts')
await fs.mkdir(uploadsDir, { recursive: true })

// Connect to same SQLite DB as auth
const dbPath = path.resolve(__dirname, '..', '..', 'auth.db')
const db = new Database(dbPath)

// Create payments table
db.exec(`
  CREATE TABLE IF NOT EXISTS payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    amount REAL NOT NULL,
    bank_name TEXT NOT NULL,
    account_number TEXT NOT NULL,
    transaction_ref TEXT NOT NULL,
    payment_method TEXT NOT NULL,
    receipt_path TEXT,
    receipt_url TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    submitted_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    verified_at TEXT,
    reviewer_notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
  CREATE INDEX IF NOT EXISTS idx_payments_user ON payments(user_id);
  CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
`)

export const uploadRouter = express.Router()

// JWT middleware for payments
const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || ''
  const token = header.toLowerCase().startsWith('bearer ') ? header.slice(7).trim() : ''
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required.' })
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.sub
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token.' })
  }
}

uploadRouter.use(express.json({ limit: '10mb' }))

// POST /api/payments/submit - Submit payment with receipt (authenticated)
uploadRouter.post('/submit', requireAuth, async (req, res) => {
  try {
    const userId = req.userId
    const { amount, bankName, accountNumber, transactionRef, paymentMethod, receiptBase64 } = req.body

    // Validation
    if (!amount || !bankName || !accountNumber || !transactionRef || !paymentMethod) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    let receiptPath = null
    let receiptUrl = null

    // Save receipt image if provided
    if (receiptBase64) {
      const base64Data = receiptBase64.replace(/^data:image\/\w+;base64,/, '')
      const buffer = Buffer.from(base64Data, 'base64')
      
      // Validate size (max 5MB)
      if (buffer.length > 5 * 1024 * 1024) {
        return res.status(400).json({ message: 'Receipt image too large (max 5MB)' })
      }

      // Generate unique filename
      const ext = receiptBase64.match(/data:image\/(\w+);/)?.[1] || 'png'
      const filename = `receipt-${userId}-${Date.now()}.${ext}`
      const filepath = path.join(uploadsDir, filename)
      
      await fs.writeFile(filepath, buffer)
      receiptPath = filepath
      receiptUrl = `/uploads/receipts/${filename}`
    }

    // Insert into database
    const insert = db.prepare(`
      INSERT INTO payments (user_id, amount, bank_name, account_number, transaction_ref, payment_method, receipt_path, receipt_url, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `)
    
    const result = insert.run(
      userId,
      parseFloat(amount),
      bankName,
      accountNumber,
      transactionRef,
      paymentMethod,
      receiptPath,
      receiptUrl
    )

    const submission = db.prepare('SELECT * FROM payments WHERE id = ?').get(result.lastInsertRowid)

    res.status(201).json({
      ...submission,
      receiptUrl: receiptUrl ? `http://localhost:5000${receiptUrl}` : null,
    })
  } catch (err) {
    console.error('Payment submit error:', err)
    res.status(500).json({ message: 'Server error: ' + err.message })
  }
})

// GET /api/payments/submissions - Get authenticated user's submissions
uploadRouter.get('/submissions', requireAuth, (req, res) => {
  const userId = req.userId
  const submissions = db.prepare('SELECT * FROM payments WHERE user_id = ? ORDER BY submitted_at DESC').all(userId)
  
  res.json(submissions.map(s => ({
    ...s,
    receiptUrl: s.receipt_url ? `http://localhost:5000${s.receipt_url}` : null,
  })))
})

// GET /api/payments/admin/submissions - Get all submissions (admin only)
uploadRouter.get('/admin/submissions', requireAuth, (req, res) => {
  // TODO: Check if user is admin
  const submissions = db.prepare(`
    SELECT p.*, u.phone, u.name as user_name 
    FROM payments p 
    LEFT JOIN users u ON p.user_id = u.id 
    ORDER BY p.submitted_at DESC
  `).all()
  
  res.json(submissions.map(s => ({
    ...s,
    receiptUrl: s.receipt_url ? `http://localhost:5000${s.receipt_url}` : null,
  })))
})

// PATCH /api/payments/verify/:submissionId - Verify/reject payment (admin only)
uploadRouter.patch('/verify/:submissionId', requireAuth, (req, res) => {
  const { status, reviewerNotes } = req.body
  const submissionId = req.params.submissionId
  
  // TODO: Check if user is admin
  
  const update = db.prepare(`
    UPDATE payments 
    SET status = ?, reviewer_notes = ?, verified_at = CURRENT_TIMESTAMP 
    WHERE id = ?
  `)
  
  update.run(status, reviewerNotes || null, submissionId)
  
  const submission = db.prepare('SELECT * FROM payments WHERE id = ?').get(submissionId)
  
  if (!submission) {
    return res.status(404).json({ message: 'Submission not found' })
  }

  res.json({
    ...submission,
    receiptUrl: submission.receipt_url ? `http://localhost:5000${submission.receipt_url}` : null,
  })
})

// Static file serving for uploaded receipts
// GET /api/payments/status - Get user's payment status (for premium access check)
uploadRouter.get('/status', requireAuth, (req, res) => {
  const userId = req.userId
  
  const result = db.prepare(`
    SELECT 
      COUNT(CASE WHEN status = 'verified' THEN 1 END) as verified_count,
      COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_count,
      MAX(CASE WHEN status = 'verified' THEN verified_at END) as last_verified
    FROM payments 
    WHERE user_id = ?
  `).get(userId)
  
  const hasPremium = result.verified_count > 0
  
  res.json({
    hasPremiumAccess: hasPremium,
    verifiedPayments: result.verified_count,
    pendingPayments: result.pending_count,
    lastVerifiedAt: result.last_verified,
    status: hasPremium ? 'verified' : (result.pending_count > 0 ? 'pending' : 'none')
  })
})

export const receiptStaticPath = uploadsDir
