import { Server } from "socket.io";
import http from "http";
import express from "express";

// Create express instance — will be replaced by main app.js
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

let MapOnlineUser = {};
export let user;

export function getReciever(userId) {
  return MapOnlineUser[userId];
}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  user = userId;

  if (userId) {
    MapOnlineUser[userId] = socket.id;
    io.emit("getOnlineUser", Object.keys(MapOnlineUser));
  }

  socket.on("disconnect", (reason) => {
    console.log("Disconnected:", reason);
    if (userId) {
      delete MapOnlineUser[userId];
      io.emit("getOnlineUser", Object.keys(MapOnlineUser));
    }
  });
});

export { app, server, io };
