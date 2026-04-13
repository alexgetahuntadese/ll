import 'dotenv/config'
import dns from 'dns/promises'
import net from 'net'

const dbUrl = process.env.DATABASE_URL || process.argv[2]
if (!dbUrl) {
  console.error('Missing DATABASE_URL. Provide it in .env or as first arg.')
  process.exit(1)
}

let hostname, port
try {
  const u = new URL(dbUrl)
  hostname = u.hostname
  port = Number(u.port) || 5432
} catch (err) {
  console.error('Invalid DATABASE_URL format:', err.message)
  process.exit(1)
}

async function check() {
  console.log(`Checking DNS for ${hostname}...`)
  try {
    const addr = await dns.lookup(hostname)
    console.log('DNS lookup OK:', addr.address)
  } catch (err) {
    console.error('DNS lookup failed:', err.code || err.message)
    process.exit(2)
  }

  console.log(`Testing TCP connection to ${hostname}:${port}...`)
  await new Promise((resolve, reject) => {
    const s = new net.Socket()
    const timeout = 5000
    let settled = false
    s.setTimeout(timeout)
    s.once('error', (err) => {
      if (settled) return
      settled = true
      s.destroy()
      reject(err)
    })
    s.once('timeout', () => {
      if (settled) return
      settled = true
      s.destroy()
      reject(new Error('timeout'))
    })
    s.connect(port, hostname, () => {
      if (settled) return
      settled = true
      s.end()
      resolve()
    })
  }).then(() => {
    console.log('TCP connection succeeded (port reachable)')
    process.exit(0)
  }).catch((err) => {
    console.error('TCP connection failed:', err.code || err.message)
    process.exit(3)
  })
}

check()
