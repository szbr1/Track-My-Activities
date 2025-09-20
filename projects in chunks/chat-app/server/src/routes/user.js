import express from "express"
import { TokenCheck } from "../config/jwt.js";
import User from "../models/user.model.js";

const route = express.Router()


route.post("/new-user", async (req,res)=>{
    try {
        const {userId, username} = req.body;
        
        const userIdAlreadyExist = await User.findOne({userId: userId})

        if(userIdAlreadyExist){
            return res.status(401).json({message: "Network issues refresh the website."})
        }

        const newUser = await User.create({
            userId,
            username
        })

        TokenCheck(res, newUser._id)

        return res.status(200).json({message: "Successfully Your Account Created."})

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "The Server is Not Working Try Again Later."})
    }
} )

route.post("/user-verify", async(req,res)=>{
    try {
      const {userId} = req.body;

      const userVerify = await User.findOne({userId: userId})

      if(!userVerify){
        return res.status(401).json({message: "You have 4 more attempts"})
      }
      
      TokenCheck(res ,userVerify._id)
      
      res.status(200).json({message: "Welcome Back"})
    } catch (error) {
      console.error(error)  
      return res.status(501).json({message: "Server error try agian later"})
    }
})


export default route;



