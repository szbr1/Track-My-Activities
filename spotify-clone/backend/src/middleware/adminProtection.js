import { clerkClient } from "@clerk/express";

export const adminProtection = async (req,res,next)=>{
    try {
       const loggedUser =await clerkClient.users.getUser(req.auth.userId)
       const admin = process.env.CLERK_EMAIL === loggedUser.primaryEmailAddress.emailAddress

       if(!admin){
        return res.status(400).json(`you can't make changes `)
       }

       next()
    } catch (error) {
        res.status(500).json('server error in authenctication')
    }
}