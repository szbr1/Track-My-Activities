import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    roomId: {type: String , required: true, unique: true },
    roomUsers: [{type: mongoose.Types.ObjectId, ref:"users"}]
})


const RoomModel = mongoose.model("rooms", roomSchema)

export default RoomModel;