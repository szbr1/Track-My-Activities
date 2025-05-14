

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import User from '../Schemas/authUserSchema.js';


// Register model 
export const register = async (req, res)=>{
    try {
        const {username , password , email} = req.body;
        
        if(!password || !email || !username){
            return res.status(400).json({success: false, message: 'Please fill the feilds first'})
        }
        
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json('User Already exists')
        }
        
        const hashing = bcrypt.genSaltSync(10)
        const HashedPassword = await bcrypt.hash(password , hashing

         )
    const Newuser = new User({username , password:HashedPassword, email});

    await Newuser.save()
    const payload = {id: Newuser._id}
    const token =  jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '40h'})
    
     
    return res.status(200).json('User Created', token)
    }
     catch (error) {
        return res.status(500).json('Server Error Request Failed')
    }

} 


export const singup = async (req , res)=>{
    const {email, password} = req.body;
  try {
    
  
    if(!email && password){
        return res.status(400).json('Enter all feilds')
    }

    const user = await User.findOne({email})
    if(!user){
       return res.status(400).json('Invalid Credentials')
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch){
        return res.status(400).json('Invalid Credentials')
    }
    

    const payload = {id: user._id}
        const token =  jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '40h'})
        
         
        return res.status(200).json({message:'Welcome',token: token})
    } catch (error) {
     console.error('here is the errror:' , error);
     return res.status(500).json('Server Error' )
    }
}
