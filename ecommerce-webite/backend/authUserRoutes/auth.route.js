import express from 'express'
import User from '../Schemas/authUserSchema.js';
import bcrypt from 'bcryptjs';
import { register, singup } from '../authUsermodels/auth.model.js';

const router = express.Router()


router.post("/register", register)
router.post("/login", singup )
router.post("logout", async(req ,res)=>{
     
})

export default router;