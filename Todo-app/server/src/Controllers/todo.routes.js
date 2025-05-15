import { validationResult } from "express-validator"
import Todo from "../Schemas/todoSchema.js"
import User from "../Schemas/userSchema.js"

export const todo = async (req,res)=>{
  
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()[0]})
    }
    try {
       
        const result = await Todo.create({desc: req.body.desc, userId:req.userId})
        if(!result){
            return res.status(400).json('please give the data first at line 13')
        }
        await User.findOneAndUpdate({_id: req.userId},{ $push: {todos:result._id}})
        return res.status(200).json({success:true, data: result})
        
    } catch (error) {
        console.log({error: error})
        return res.status(500).json({message:'Crashed at todo', detail:error})
    }
}

export const getTodo = async (req,res)=>{
    try {
       const list = await User.findById(req.userId).select("-password").populate('todos').exec()
       if(!list){
        return res.status(400).json('please add any todo')
       }
       return res.status(200).json({success: true,data:list})
        
    } catch (error) {
        return res.status(500).json({success: false, detailError: error})
    }
}