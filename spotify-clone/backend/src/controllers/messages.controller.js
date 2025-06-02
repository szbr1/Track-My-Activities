import Message from "../models/message.model"

export const getAllMessages = async (req,res,next)=>{
    try {
        const myId = req.auth.userId
        const {id: recieverId} = req.params

    const newMessage = await Message.find({
        $or: [
            {senderId:myId, reciverId:recieverId},
            {recieverId:myId, senderId:recieverId}
        ]
    }).sort({createdAt: 1})

   return  res.status(200).json(newMessage)
        
    } catch (error) {
        console.error(error)
        next(error)
    }
}