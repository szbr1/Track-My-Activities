import Todo from "../Schemas/todoSchema.js"
import User from "../Schemas/userSchema.js"

export const deleteTodo = async (req , res)=>{
  const {token_id} = req.body
  if(!token_id){
    return res.status(400).json('No token found')
  }
  try {
   const verification = await Todo.findOneAndDelete({_id:token_id, userId: req.userId})
   if(!verification){
    return res.status(400).json('failed to delte')
   }
   const result= await User.findOneAndUpdate({_id:req.userId},{ $push: {todos: token_id}})
   return res.status(200).json(result)

  } catch (error) {
    console.log({error: error})
    res.status(500).json('failed')
    
  }
}