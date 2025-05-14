import { validationResult } from "express-validator";
import User from "../Schemas/userSchema.js";
import bcrypt from "bcryptjs";
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

  newUser.save()
  // If no errors:
  return res.status(200).json({ success: req.body });
};


// .  error.isEmpty() //! means if there is no error so run this 
// .  !error.isEmpty() //!measn if there is error so run this 
// .  isEmpty() checks //! there is error or not 


// jsonwebtoken && how to use created todo collection 