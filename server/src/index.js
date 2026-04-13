import "dotenv/config";

import cors from "cors";
import express from "express";
import { createServer } from "node:http";
import { Server as SocketIOServer } from "socket.io";
import authRouter from './auth/sqliteRoutes.js'
import { uploadRouter, receiptStaticPath } from './auth/payments.js'
import pg from "pg";

const { Pool } = pg;

const {
  PORT = "5000",
  DATABASE_URL,
  JWT_SECRET,
  CLIENT_ORIGIN = "http://localhost:8080",
} = process.env;

if (!DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in server environment.");
}

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in server environment.");
}

const app = express();
const httpServer = createServer(app);
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

const defaultDevOrigins = [
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

const allowedOrigins = [
  ...defaultDevOrigins,
  ...CLIENT_ORIGIN.split(",").map((value) => value.trim()),
].filter(Boolean);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json({ limit: '10mb' }));

// Mount auth routes implemented in server/src/auth
app.use('/api/auth', authRouter)

// Mount payment routes
app.use('/api/payments', uploadRouter)

// Serve uploaded receipts statically
app.use('/uploads/receipts', express.static(receiptStaticPath))

app.get("/api/health", async (_request, response) => {
  try {
    await pool.query("SELECT 1");
    response.json({ ok: true });
  } catch (error) {
    response.status(500).json({ ok: false, message: "Database connection failed." });
  }
});

app.use((error, _request, response, _next) => {
  console.error(error);

  if (error?.message === "Origin is not allowed for this API.") {
    response.status(403).json({ message: error.message });
    return;
  }

  response.status(500).json({ message: "Something went wrong on the auth server." });
});

const io = new SocketIOServer(httpServer, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

// Minimal 1:1 signaling by room.
io.on("connection", (socket) => {
  socket.on("webrtc:join-room", ({ roomId, displayName }) => {
    if (!roomId || typeof roomId !== "string") return;
    socket.join(roomId);
    socket.data.roomId = roomId;
    socket.data.displayName = displayName || "Student";

    const room = io.sockets.adapter.rooms.get(roomId);
    const peers = room ? Array.from(room).filter((id) => id !== socket.id) : [];
    socket.emit("webrtc:room-users", peers);
    socket.to(roomId).emit("webrtc:user-joined", {
      socketId: socket.id,
      displayName: socket.data.displayName,
    });
  });

  socket.on("webrtc:offer", ({ target, sdp }) => {
    if (!target || !sdp) return;
    io.to(target).emit("webrtc:offer", { from: socket.id, sdp });
  });

  socket.on("webrtc:answer", ({ target, sdp }) => {
    if (!target || !sdp) return;
    io.to(target).emit("webrtc:answer", { from: socket.id, sdp });
  });

  socket.on("webrtc:ice-candidate", ({ target, candidate }) => {
    if (!target || !candidate) return;
    io.to(target).emit("webrtc:ice-candidate", { from: socket.id, candidate });
  });

  socket.on("disconnect", () => {
    if (socket.data.roomId) {
      socket.to(socket.data.roomId).emit("webrtc:user-left", { socketId: socket.id });
    }
  });
});

httpServer.listen(Number(PORT), () => {
  console.log(`Auth server listening on http://localhost:${PORT}`);
});
