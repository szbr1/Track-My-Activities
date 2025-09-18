import express, { response } from "express"
import Message from "../models/chat.model.js";


const route = express.Router()


route.post("/send-message", async(req,res)=>{
    try {
        const {message, senderName, recieverName} = req.body;
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


route.get("/fetch-messages", async(req,res)=>{
    try {
       const {senderName, recieverName} = req.body;

      const messages = await Message.find({$or: [{senderName, recieverName},{recieverName, senderName}]})

      return res.status(200).json({message: messages})

    } catch (error) {
        console.error(error)
        return res.status(400).json({message: "Server is not wokring"})
    }
})


export default route;



