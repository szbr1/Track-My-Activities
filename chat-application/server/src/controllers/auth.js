import jsonGenerate from "../lib/token.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signup = async (req , res )=>{
    try {
        const {username, password, email} = req.body;
        if(!username || !password || !email){
            return res.status(400).json('Please fill all the fields')
        }
        const identityCheck = await User.findOne({email})
        if(identityCheck){
            return res.status(400).json("User already exists")
        }

        const salt =await bcrypt.genSalt(10)
        const hashpassword =await bcrypt.hash(password, salt)
        
        const newUser =await User({
           username,
           email,
           password: hashpassword
        })
        jsonGenerate(newUser._id, req)
        newUser.save()


        
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false, message: 'failed at signup'})
    }
}