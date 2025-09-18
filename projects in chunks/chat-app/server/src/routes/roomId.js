import express from "express";
import RoomModel from "../models/roomId.model.js";
import { verifyToken } from "../config/jwt.js";

const route = express.Router();

route.post("/new-roomId", verifyToken, async (req, res) => {
  try {
    const { roomId } = req.body;
    const RoomIdVerify = await RoomModel.findOne({ roomId: roomId });

    if (RoomIdVerify) {
      return res.status(401).json({ message: "This roomId is very weak" });
    }

    await RoomModel.create({
      roomId: roomId,
    });

    return res.status(200).json({ message: "Welcome To The ", roomId });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error please try again later" });
  }
});

route.post("/verify-roomId", verifyToken, async (req, res) => {
  try {
    const { roomId } = req.body;
    const RoomIdVerify = await RoomModel.findOne({ roomId: roomId });

    if (!RoomIdVerify) {
      return res.status(401).json({ message: "Please add correct roomId" });
    }

    await RoomModel.findOneAndUpdate(
      { roomId: roomId },
      //it will only add the user if user not exist 
      { $addToSet: { roomUsers: req.userId } }
    );

    return res.status(200).json({ message: "Welcome To The ", roomId });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error please try again later" });
  }
});

export default route;
