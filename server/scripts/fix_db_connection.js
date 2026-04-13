// Helper script to diagnose and fix Supabase connection issues
// Run: node scripts/fix_db_connection.js

import 'dotenv/config'
import { Pool } from 'pg'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

console.log('=== Database Connection Diagnostic ===\n')

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in environment')
  console.log('\nFix: Create server/.env file with:')
  console.log('DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres')
  console.log('JWT_SECRET=your-secret-key-min-32-chars')
  console.log('CLIENT_ORIGIN=http://localhost:8080')
  process.exit(1)
}

// Parse connection URL
let dbConfig
try {
  const url = new URL(DATABASE_URL)
  dbConfig = {
    host: url.hostname,
    port: url.port || '5432',
    database: url.pathname.slice(1),
    user: url.username,
  }
  console.log('Connection config:')
  console.log(`  Host: ${dbConfig.host}`)
  console.log(`  Port: ${dbConfig.port}`)
  console.log(`  Database: ${dbConfig.database}`)
  console.log(`  User: ${dbConfig.user}`)
} catch (err) {
  console.error('❌ Invalid DATABASE_URL format')
  process.exit(1)
}

// Check if it's Supabase
const isSupabase = dbConfig.host.includes('supabase.co')
if (isSupabase) {
  console.log('\n📍 Detected Supabase database')
}

// Test connection
console.log('\n🔄 Testing connection...')
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
})

try {
  const client = await pool.connect()
  console.log('✅ Database connection successful!')
  
  // Check if users table exists
  const tableCheck = await client.query(`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'users'
    );
  `)
  
  if (tableCheck.rows[0].exists) {
    console.log('✅ Users table exists')
    
    // Count users
    const count = await client.query('SELECT COUNT(*) FROM users')
    console.log(`📊 Users in database: ${count.rows[0].count}`)
  } else {
    console.log('⚠️  Users table does not exist - run migrations!')
    console.log('   Run: npm run migrate')
  }
  
  client.release()
} catch (err) {
  console.error('\n❌ Connection failed:', err.message)
  
  if (err.message.includes('ENOTFOUND')) {
    console.log('\n🔧 FIX: Your database hostname cannot be found.')
    if (isSupabase) {
      console.log('\n   Supabase projects auto-pause after 7 days.')
      console.log('   1. Go to https://supabase.com/dashboard')
      console.log('   2. Find your project and click "Restore" if paused')
      console.log('   3. Wait 1-2 minutes for it to wake up')
      console.log('   4. Copy the new connection string from Settings → Database')
      console.log('   5. Update your server/.env file')
    }
  }
  
  if (err.message.includes('password authentication failed')) {
    console.log('\n🔧 FIX: Wrong password in DATABASE_URL')
    console.log('   Update server/.env with correct password from Supabase dashboard')
  }
  
  if (err.message.includes('Connection refused')) {
    console.log('\n🔧 FIX: Cannot reach database server')
    console.log('   - Check if Supabase project is active')
    console.log('   - Or use local PostgreSQL for development')
  }
  
  process.exit(1)
} finally {
  await pool.end()
}

console.log('\n✅ All checks passed! Ready to run migrations.')
console.log('   Run: npm run migrate')
