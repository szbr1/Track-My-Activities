import express, { response } from "express"
import Message from "../models/chat.model.js";
import { RoomMiddleware, verifyToken } from "../config/jwt.js";


const route = express.Router()


route.post("/send-message/:id",verifyToken,RoomMiddleware, async(req,res)=>{
    try {
        const {message} = req.body;

        const senderName = req.userId
        const {id: recieverName} = req.params

        console.log("----------------")
        console.log(senderName, "----", recieverName)
        console.log("----------------")
        
          if(!message || !senderName || !recieverName){
            return res.status(401).json({message: "You Can't Send Message"})
          }
         
        const msg = Message.create({
            message,
            recieverName,
            senderName
        }) 

        return res.status(200).json({message: msg})

    } catch (error) {
        console.error(error)
        return res.status(400).json({message: "Server is not wokring"})
    }
})


route.get("/fetch-messages/:id",verifyToken, RoomMiddleware, async(req,res)=>{
    try {
        const senderName = req.userId
        const {id: recieverName} = req.params
         
        
        
      const messages = await Message.find({$or: [{senderName, recieverName},{recieverName, senderName}]})

      return res.status(200).json({message: messages})

    } catch (error) {
        console.error(error)
        return res.status(400).json({message: "Server is not wokring"})
    }
})


export default route;



