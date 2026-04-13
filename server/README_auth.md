# Phone+Password auth (Node/Express + Postgres)

Files added in `server/src/auth`:
- `db.ts` — Postgres Pool helper
- `hash.ts` — bcrypt wrapper
- `routes.ts` — `POST /auth/register` and `POST /auth/login`

SQL migration: `server/sql/migrations/0001_create_users.sql`

Quick setup

1. Install runtime deps in `server`:

```bash
npm install express pg bcrypt jsonwebtoken
npm install -D @types/express @types/bcrypt @types/jsonwebtoken
```

2. Create `.env` from `.env.example` and set `DATABASE_URL` and `JWT_SECRET`.

3. Run the migration (psql or your migration tool) to create `users`.

4. Mount the router in your Express app, e.g.:

```ts
import express from 'express'
import authRouter from './auth'

const app = express()
app.use(express.json())
app.use('/auth', authRouter)
```

Security notes
- Use a strong `JWT_SECRET` and rotate as needed.
- Consider phone verification (SMS) before marking `is_verified`.
- Add rate-limiting and account lockouts to protect against brute force.
