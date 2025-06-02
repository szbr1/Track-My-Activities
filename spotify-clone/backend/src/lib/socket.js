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

    //i have to build the connection 
    io.on("connection",(socket)=>{
        //here i have to build user connection
        socket.on("user_connected",(userId)=>{
            UserSocket.set(userId, socket.id)
            ActivitySocket.set(userId, "idle")

            io.emit("connection", userId)
         
            io.emit("getUsers", Array.from(UserSocket.keys()))
            socket.emit("getActivities", Array.from(ActivitySocket.entries()))

            
            
        })

        //here we upload user Activities 
        socket.on("update_activity",(userId, activies)=>{
            ActivitySocket.set(userId, activies)

            io.emit("activity_updated", {userId, activies})

        })

      socket.on("send_message", async (data)=>{
        const {userId,reciverId,content}  = data;
        const message = await Message.create({
            userId,content,reciverId
        })

        const userStatus = UserSocket.get(reciverId)
        if(userStatus){
            io.to(userStatus).emit("recievMessage", message)
        }

        socket.emit("sentMessage", message)
      })

      socket.on("disconnect_user", ()=>{
        let disconnectUser;
       for( const [userId, socketId] of UserSocket.entries()){

           if(socketId === socket.id){
            disconnectUser = userId
               UserSocket.delete(userId)
               ActivitySocket.delete(userId)
               break
            }
            if(disconnectUser){
                io.emit("user_disconnected", disconnectUser)
            }
        }
      })
    })

}


