import express from "express";
import RoomModel from "../models/roomId.model.js";
import { RoomMiddleware, roomToken, verifyToken } from "../config/jwt.js";

const route = express.Router();

route.post("/new-roomId", verifyToken, async (req, res) => {
  try {
    const { roomId } = req.body;
  
    const RoomIdVerify = await RoomModel.findOne({ roomId: roomId });

    if (RoomIdVerify) {
      return res.status(401).json({ message: "This roomId is very weak" });
    }

    const Room = await RoomModel.create({
      roomId: roomId,
      roomUsers: [req.userId]
    });

    roomToken(res,Room._id)

    return res.status(200).json({ message: "Welcome To The ", roomId });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(Room);
  }
});

route.post("/verify-roomId", verifyToken, async (req, res) => {
  try {
    const { roomId } = req.body;
    const RoomIdVerify = await RoomModel.findOne({ roomId: roomId });

    if (!RoomIdVerify) {
      return res.status(401).json({ message: "Please add correct roomId" });
    }
    roomToken(res,RoomIdVerify._id)
    const Room = await RoomModel.findOneAndUpdate(
      { roomId: roomId },
      //it will only add the user if user not exist 
      { $addToSet: { roomUsers: req.userId } }
    );

    return res.status(200).json(Room);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(Room);
  }
});



route.get("/fetch-room",verifyToken,RoomMiddleware, async(req,res)=>{
  try {
    const Room = await RoomModel.findOne({_id: req.roomId}).populate({path: "roomUsers", select: "username", $match: {_id: {$ne: req.userId}}}).exec();
    console.log("----------------")
    console.log(Room)
    console.log("----------------")
    return res.status(200).json(Room)
  } catch (error) {
    console.error(error)
  }
})

export default route;



