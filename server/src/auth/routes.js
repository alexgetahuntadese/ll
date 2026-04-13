import express from 'express'
import pool from './db.js'
import { hashPassword, verifyPassword } from './hash.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7

const normalizePhoneNumber = (value = '') => {
  const compact = String(value).replace(/[^\d+]/g, '')

  if (!compact) return ''
  if (compact.startsWith('+')) return compact
  if (compact.startsWith('251')) return `+${compact}`
  if (compact.startsWith('0')) return `+251${compact.slice(1)}`
  return compact
}

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
  preferences: row.preferences && typeof row.preferences === 'object' ? row.preferences : { role: 'student' },
  is_active: Boolean(row.is_active),
  created_at: row.created_at ? new Date(row.created_at).toISOString() : new Date().toISOString(),
  updated_at: row.updated_at ? new Date(row.updated_at).toISOString() : new Date().toISOString(),
  last_login: row.last_login ? new Date(row.last_login).toISOString() : null,
})

const buildAuthResponse = (row) => {
  const expiresAt = new Date(Date.now() + TOKEN_TTL_SECONDS * 1000).toISOString()
  const token = jwt.sign({ sub: String(row.id), phone: row.phone }, process.env.JWT_SECRET, { expiresIn: TOKEN_TTL_SECONDS })

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

const requireAuth = async (request, response, next) => {
  const token = getBearerToken(request)
  if (!token) return response.status(401).json({ message: 'Authentication required.' })

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const userId = Number(payload.sub)
    if (!Number.isInteger(userId)) return response.status(401).json({ message: 'Invalid authentication token.' })

    const result = await pool.query('SELECT * FROM users WHERE id = $1 LIMIT 1', [userId])
    const user = result.rows[0]
    if (!user) return response.status(401).json({ message: 'User account not found.' })

    request.authUser = user
    next()
  } catch (err) {
    return response.status(401).json({ message: 'Your session is no longer valid. Sign in again.' })
  }
}

router.post('/register', async (req, res) => {
  try {
    const fullName = typeof req.body.fullName === 'string' ? req.body.fullName.trim() : ''
    const phone = normalizePhoneNumber(req.body.phone)
    const password = typeof req.body.password === 'string' ? req.body.password : ''

    if (!fullName) return res.status(400).json({ message: 'Enter your full name.' })
    if (!phone) return res.status(400).json({ message: 'Enter a valid phone number.' })
    if (password.length < 6) return res.status(400).json({ message: 'Use a password with at least 6 characters.' })

    const existing = await pool.query('SELECT id FROM users WHERE phone = $1 LIMIT 1', [phone])
    if (existing.rows.length > 0) return res.status(409).json({ message: 'That phone number is already registered. Try signing in instead.' })

    const passwordHash = await hashPassword(password)
    const insertResult = await pool.query(
      `INSERT INTO users (phone, password_hash, name, preferences, last_login)
       VALUES ($1, $2, $3, $4, NOW()) RETURNING *`,
      [phone, passwordHash, fullName, JSON.stringify({ role: 'student' })],
    )

    return res.status(201).json(buildAuthResponse(insertResult.rows[0]))
  } catch (err) {
    console.error('REGISTER ERROR:', err.message, err.stack)
    return res.status(500).json({ message: 'Server error: ' + err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const phone = normalizePhoneNumber(req.body.phone)
    const password = typeof req.body.password === 'string' ? req.body.password : ''

    if (!phone || !password) return res.status(400).json({ message: 'Enter your phone number and password.' })

    const result = await pool.query('SELECT * FROM users WHERE phone = $1 LIMIT 1', [phone])
    const user = result.rows[0]
    if (!user) return res.status(401).json({ message: 'No account was found for that phone number.' })

    const passwordMatches = await verifyPassword(password, user.password_hash)
    if (!passwordMatches) return res.status(401).json({ message: 'Incorrect phone number or password.' })

    const updateResult = await pool.query(
      `UPDATE users SET last_login = NOW(), updated_at = NOW() WHERE id = $1 RETURNING *`,
      [user.id],
    )

    return res.json(buildAuthResponse(updateResult.rows[0]))
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
})

router.get('/me', requireAuth, async (req, res) => {
  return res.json(buildAuthResponse(req.authUser))
})

router.patch('/me', requireAuth, async (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : ''
  const emailRaw = typeof req.body.email === 'string' ? req.body.email.trim() : ''
  const email = emailRaw || null

  if (!name) return res.status(400).json({ message: 'Enter your full name.' })

  const updateResult = await pool.query(
    `UPDATE users SET name = $1, email = $2, updated_at = NOW() WHERE id = $3 RETURNING *`,
    [name, email, req.authUser.id],
  )

  return res.json(buildAuthResponse(updateResult.rows[0]))
})

router.post('/logout', (_req, res) => {
  res.json({ ok: true })
})

export default router
