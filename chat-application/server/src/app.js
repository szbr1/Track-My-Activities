import express from "express";
import next from "next";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRoutes from "./routes/api.js";
import MsgRoutes from "./routes/msg.api.js";
import monogoDB from "./lib/db.js";
import { server, io, app as socketApp } from "./lib/socketio.js";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: "./frontend" });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = socketApp; // use the same app instance from socketio.js

  app.use(cookieParser());
  app.use(express.json());
  app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl)
      if (!origin) return callback(null, true);
      return callback(null, origin);
    },
    credentials: true
  }));

  // API routes
  app.use("/api", AuthRoutes);
  app.use("/api/messages", MsgRoutes);

  // DB connection
  monogoDB();

  // Let Next.js handle everything else
  app.all("*", (req, res) => handle(req, res));

  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(`Server ready on http://localhost:${PORT}`);
  });
});
