// SQLite-based auth for local development
// Works without external database - data stored in auth.db file

import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production'
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 days

// Initialize SQLite database
const dbPath = path.resolve(__dirname, '..', '..', 'auth.db')
const db = new Database(dbPath)

// Create tables
const initSchema = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    phone TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT,
    email TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    preferences TEXT NOT NULL DEFAULT '{"role":"student"}',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
`
db.exec(initSchema)
console.log('✅ SQLite auth database ready at:', dbPath)

// Helper functions
const normalizePhoneNumber = (value = '') => {
  const compact = String(value).replace(/[^\d+]/g, '')
  if (!compact) return ''
  if (compact.startsWith('+')) return compact
  if (compact.startsWith('251')) return `+${compact}`
  if (compact.startsWith('0')) return `+251${compact.slice(1)}`
  return compact
}

const hashPassword = (password) => bcrypt.hashSync(password, 10)
const verifyPassword = (password, hash) => bcrypt.compareSync(password, hash)

const buildUser = (row) => ({
  id: String(row.id),
  phone: row.phone,
  email: row.email ?? null,
  user_metadata: {
    name: row.name ?? null,
    mobile: row.phone,
  },
})

const buildProfile = (row) => ({
  id: String(row.id),
  auth_id: String(row.id),
  name: row.name ?? null,
  mobile: row.phone,
  email: row.email ?? null,
  phone: row.phone,
  grade: null,
  school: null,
  profile_image_url: null,
  date_of_birth: null,
  gender: null,
  preferences: row.preferences ? JSON.parse(row.preferences) : { role: 'student' },
  is_active: Boolean(row.is_active),
  created_at: row.created_at,
  updated_at: row.updated_at,
  last_login: row.last_login,
})

const buildAuthResponse = (row) => {
  const expiresAt = new Date(Date.now() + TOKEN_TTL_SECONDS * 1000).toISOString()
  const token = jwt.sign({ sub: String(row.id), phone: row.phone }, JWT_SECRET, { expiresIn: TOKEN_TTL_SECONDS })
  return {
    token,
    session: { accessToken: token, expiresAt, user: buildUser(row) },
    profile: buildProfile(row),
  }
}

const getBearerToken = (request) => {
  const header = request.headers.authorization ?? ''
  if (!header.toLowerCase().startsWith('bearer ')) return ''
  return header.slice(7).trim()
}

const requireAuth = (request, response, next) => {
  const token = getBearerToken(request)
  if (!token) return response.status(401).json({ message: 'Authentication required.' })
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(decoded.sub)
    if (!user) return response.status(401).json({ message: 'User not found.' })
    request.authUser = user
    next()
  } catch (err) {
    return response.status(401).json({ message: 'Your session is no longer valid. Sign in again.' })
  }
}

// Routes
router.post('/register', (req, res) => {
  try {
    const fullName = typeof req.body.fullName === 'string' ? req.body.fullName.trim() : ''
    const phone = normalizePhoneNumber(req.body.phone)
    const password = typeof req.body.password === 'string' ? req.body.password : ''

    if (!fullName) return res.status(400).json({ message: 'Enter your full name.' })
    if (!phone) return res.status(400).json({ message: 'Enter a valid phone number.' })
    if (password.length < 6) return res.status(400).json({ message: 'Use a password with at least 6 characters.' })

    const existing = db.prepare('SELECT id FROM users WHERE phone = ?').get(phone)
    if (existing) return res.status(409).json({ message: 'That phone number is already registered. Try signing in instead.' })

    const passwordHash = hashPassword(password)
    const insert = db.prepare(`
      INSERT INTO users (phone, password_hash, name, preferences, last_login)
      VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    `)
    const result = insert.run(phone, passwordHash, fullName, JSON.stringify({ role: 'student' }))
    
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid)
    return res.status(201).json(buildAuthResponse(user))
  } catch (err) {
    console.error('REGISTER ERROR:', err)
    return res.status(500).json({ message: 'Server error: ' + err.message })
  }
})

router.post('/login', (req, res) => {
  try {
    const phone = normalizePhoneNumber(req.body.phone)
    const password = typeof req.body.password === 'string' ? req.body.password : ''

    if (!phone || !password) return res.status(400).json({ message: 'Enter your phone number and password.' })

    const user = db.prepare('SELECT * FROM users WHERE phone = ?').get(phone)
    if (!user) return res.status(401).json({ message: 'No account was found for that phone number.' })

    const passwordMatches = verifyPassword(password, user.password_hash)
    if (!passwordMatches) return res.status(401).json({ message: 'Incorrect phone number or password.' })

    db.prepare('UPDATE users SET last_login = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(user.id)
    
    const updatedUser = db.prepare('SELECT * FROM users WHERE id = ?').get(user.id)
    return res.json(buildAuthResponse(updatedUser))
  } catch (err) {
    console.error('LOGIN ERROR:', err)
    return res.status(500).json({ message: 'Server error: ' + err.message })
  }
})

router.get('/me', requireAuth, (req, res) => {
  return res.json(buildAuthResponse(req.authUser))
})

router.patch('/me', requireAuth, (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : ''
  const emailRaw = typeof req.body.email === 'string' ? req.body.email.trim() : ''
  const email = emailRaw || null

  if (!name) return res.status(400).json({ message: 'Enter your full name.' })

  db.prepare('UPDATE users SET name = ?, email = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    .run(name, email, req.authUser.id)
  
  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.authUser.id)
  return res.json(buildAuthResponse(updated))
})

router.post('/logout', (_req, res) => {
  res.json({ ok: true })
})

export default router
