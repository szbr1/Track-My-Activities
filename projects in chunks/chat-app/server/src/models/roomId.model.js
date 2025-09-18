import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    roomId: {type: String , required: true, unique: true },
    roomUsers: {type: Array, }
})


const RoomModel = mongoose.model("rooms", roomSchema)

export default RoomModel;