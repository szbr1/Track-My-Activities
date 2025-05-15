import Todo from "../Schemas/todoSchema.js";
import User from "../Schemas/userSchema.js";
//verify
//result

export const deleteTodo = async (req, res) => {
  try {
     //verify
     const {todo_id} = req.body
     if(!todo_id){
        return res.status(400).json('To delete required Id')
     }
   const result =  await Todo.findOneAndDelete({userId: req.userId, _id: todo_id})
   if(!result){
    return res.status(400).json({success:false, message: "THERE IS NO TODO WITH SUCH ID"})
   }
   await User.findOneAndUpdate({_id:req.userId}, {$pull: {todos: todo_id}},{new: true})
   return res.status(200).json({success:true,result:"Todo Deleted Successfully"})

  } catch (error) {
    console.log({ deleteError: error });
    return res.status(500).json("Failed at deleteTodo");
  }
};
