import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
//i want all users accet that one who is logged in
export const Sidebar = async (req, res) => {
  try {
    const loggedInUser = req.userId;
    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed error in Sidebar " });
  }
};

// i want chat of 2 users
export const chat = async (req, res) => {
  try {
    const { id: client } = req.params;
    const admin = req.userId;
    const messages = await Message.find({
       $or: [
        { senderId: admin, recieverId: client },
        { senderId: client, recieverId: admin },
      ],
    });
    return res.status(200).json(messages)
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed error in chat " });
  }
};


//here i can send msgs with this 

export const send = async (req,res)=>{
    const {id:recieverId} =req.params;
    const senderId = req.userId;
    try {
        const {text, image} = req.body;
        if(!text && !image){
            return res.status(400).json("empty msg can't send")
        }
        let uploadImage;
        if(image){
          const request =  await cloudinary.uploader.upload(image)
          uploadImage = request.secure_url
        }
        const newMessages =await Message({
            text,
            senderId,
            recieverId,
            image: uploadImage
            
        })
        await newMessages.save()
        return res.status(200).json(newMessages)
        
    } catch (error) {
        console.error(error);
        return res
          .status(500)
          .json({ success: false, message: "Failed error in chat " });
    }
    
}