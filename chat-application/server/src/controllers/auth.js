import cloudinary from "../lib/cloudinary.js";
import jsonGenerate from "../lib/token.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

//register setup

export const signup = async (req, res) => {
    try {
      const { username, password, email } = req.body;
      if (!username || !password || !email) {
        return res.status(400).json("Please fill all the fields");
      }
  
      const identityCheck = await User.findOne({ email });
      if (identityCheck) {
        return res.status(400).json("User already exists");
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, salt);
  
      const newUser = await User.create({
        username,
        email,
        password: hashpassword,
      });
  
      // convert to plain object
      jsonGenerate(User._id,res)
      const userObj = newUser.toObject();
      delete userObj.password; // remove password
  
      return res.status(200).json(userObj);
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "failed at signup" });
    }
  };
  

// signin setup

export const signin = async (req,res)=>{
    try {
      const {email, password} = req.body;

      if(!password || !email){
        return res.status(400).json('Please fill all the fields')
       }
      
       const verification = await User.findOne({email})
       const validation = await User.findOne({email}).select("-password")
       
       if(!verification){
        return res.status(400).json('Invalid Credentilas')
    }
    const validPassCheck =await bcrypt.compare(password, verification.password)
    
    if(!validPassCheck){
        return res.status(400).json('Invalid Credentilas')
       }
       jsonGenerate(verification._id,res)
       return res.status(200).json({
        success: true,
      data: validation 
        })
       
    } catch (error) {
        console.error({detailedError: error})
        return res.status(500).json("Failed to SignIn")
    }
}

// logut setup
export const signout = async (req,res)=>{
    res.cookie("token", "", {maxAge: 0})
    return res.status(200).json({
        success: true,
        message: 'logout successfully'
    })
}

//update profile 

export const updateProfile = async (req,res)=>{
    try {
        const {profilePic} = req.body; 
        if(!profilePic){
        return  res.status(400).json('Unable to update profile picture')
        }
        const response = await cloudinary.uploader.upload(profilePic);
        const upload = await User.findByIdAndUpdate(req.userId,{profilePic: response.secure_url}, {new: true})
        return res.status(200).json(upload)

    } catch (error) {
        console.error({ResultError: error})
        res.status(500).json({success: false, message: 'Crashed at profilePic'})
    }
}


export const authCheck = (req,res)=>{
    try {

   const authenctication = req.userId
   if(!authenctication){
    return res.status(400).json("Login or Register Required")
   }
   return res.status(200).json("User authenticated")
} catch (error) {
    console.error({errorDetail: error})
    return res.status(500).json("Server Crashed while Authenticating")
}
}