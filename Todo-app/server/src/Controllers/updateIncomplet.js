import Todo from "../Schemas/todoSchema.js"

export const updateTask = async(req,res)=>{
    try {
        
  
    const list = await Todo.findOneAndUpdate({_id: req.body.todo_id , userId: req.userId}, [
        {$set : {isCompleted: {$eq:[false , "$isCompleted"]}}}
    ])
    if(!list){
        return res.status(400).json('No todo find with this id')
    }

    return res.status(200).json(list)
} catch (error) {
    console.log({detailedError: error})
    return res.status(500).json("Failed at upadateTask")
}
}