import {Server} from "socket.io"
import Message from "../models/message.model.js";

export const initializeSocket = (server)=>{
    //io == cors 
    const io = new Server(server,{
        cors: {
    origin: "http://localhost:3000",
    credentials: true
        }
    })

    const UserSocket = new Map();
    const ActivitySocket = new Map();

    io.on("connection", (socket) => {
        // User Connection
        socket.on("user_connected", (userId) => {
          UserSocket.set(userId, socket.id);
          ActivitySocket.set(userId, "idle");
          io.emit("user_connected", userId);
          io.emit("users_online", Array.from(UserSocket.keys()));
          socket.emit("activities", Array.from(ActivitySocket.entries()));
        });
      
        // Activity Update
        socket.on("update_activity", (userId, activity) => {
          ActivitySocket.set(userId, activity);
          io.emit("activity_updated", { userId, activity });
        });
      
        // Message Handling
        socket.on("send_message", async (data) => {
          const { userId, receiverId, content } = data;
          const message = await Message.create({ userId, content, receiverId });
          const receiverSocketId = UserSocket.get(receiverId);
          if (receiverSocketId) {
            io.to(receiverSocketId).emit("receive_message", message);
          }
        });
      
        // Disconnection
        socket.on("disconnect", () => {
          for (const [userId, socketId] of UserSocket.entries()) {
            if (socketId === socket.id) {
              UserSocket.delete(userId);
              ActivitySocket.delete(userId);
              io.emit("user_disconnected", userId);
              break;
            }
          }
        });
      });

}


