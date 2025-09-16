import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    roomId: {type: String , required: true, unique: true }
})


const RoomModel = mongoose.model("rooms", roomSchema)

export default RoomModel;