import express from "express";
import next from "next";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRoutes from "./routes/api.js";
import MsgRoutes from "./routes/msg.api.js";
import monogoDB from "./lib/db.js";

import { server,app } from "./lib/socketio.js";

dotenv.config();



  app.use(cookieParser());
  app.use(express.json());
  app.use(cors({
    origin: "https://track-my-activities.vercel.app",
    credentials: true
  }));

  // API routes
  app.use("/api", AuthRoutes);
  app.use("/api/messages", MsgRoutes);

  // DB connection
  monogoDB();



  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(`Server ready on http://localhost:${PORT}`);
  });

