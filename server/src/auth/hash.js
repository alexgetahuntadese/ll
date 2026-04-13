import bcrypt from 'bcryptjs'

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 12

export async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS)
}

export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash)
}
