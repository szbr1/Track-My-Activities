import User from "../models/user.model.js";

export const authUserCallback = async (req , res, next)=>{
try {
    const {firstName,lastName,id, imageUrl,} = req.body;

    const UserForm = await User.findOne({clerkId: id})
    if(!UserForm){
      const newUser =  await User.create({
            fullName: `${firstName} ${lastName}`,
            imageUrl,
            clerkId: id
        })

     return    res.status(200).json({success:true, data:newUser })
    }
    return res.status(200).json({success:true})
    
} catch (error) {
   return res.status(500).json('Server Error')
   next(error)
}
}

