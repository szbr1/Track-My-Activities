import mongoose from "mongoose"

const chatSchema  = new mongoose.Schema({
    senderName   : {type: mongoose.Schema.ObjectId, ref: "users", required: true},
    recieverName : {type: mongoose.Schema.ObjectId, ref: "users", required: true},
    message      : {type: String}
}, {timestamps: true})

const Message = mongoose.model("Message", chatSchema)
export default Message