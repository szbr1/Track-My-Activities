import User from "../models/user.model.js";



export const allUsers = async (req,res,next)=>{
    try {
      const loggedInUserId = req.auth.userId;
       const data=   await User.find({clerkId: { $ne: loggedInUserId}})
      res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}