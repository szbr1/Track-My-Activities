import { validationResult } from "express-validator";
import User from "../Schemas/userSchema.js";
import bcrypt from "bcryptjs";
import jsonToken from "../utils/jwt.js";

//* Register Page

export const authRegister =async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  const {username, password, email} = req.body;
  if(!username || !password || !email){
    return res.status(400).json('Please fill all the feilds')
  }

  const dbEmail = await User.findOne({email})
  if(dbEmail){
    return res.status(400).json('Email already exist')
  }
  
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  const newUser = await User({
    username,
    email,
    password: hashPassword
  })
  //json token that i created seprately 
  const token = jsonToken(newUser._id)

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  });
  newUser.save()
  // If no errors:
  return res.status(200).json({ success: req.body });
};


// .  error.isEmpty() //! means if there is no error so run this 
// .  !error.isEmpty() //!measn if there is error so run this 
// .  isEmpty()  //!checks there is error or not 


//* Login page

export const authLogin =async (req,res)=>{
  try {
    
  
   
  const error = validationResult(req);
  if(!error.isEmpty()){
  return res.status(401).json({error:error.array()})
  }
  const {email, password} = req.body;
  if(!email || !password){
  return res.status(400).json('fill all fields')
  }

  const userFound = await User.findOne({email})
  if(!userFound){
  return res.status(400).json('please create account.')
  }
  
  const checkPass  = await bcrypt.compare( password, userFound.password)
  if(!checkPass){
  return res.status(400).json('Invalid creadentials.')

  }
 const token=  jsonToken(userFound._id)
 res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
});
  return res.status(200).json({success: true, message: 'Login Successfully'})
} catch (error) {
    console.log({error: error})
}
}
