import { clerkClient } from "@clerk/express"

export const adminProtection = async (req, res, next) => {
    try {
      
      const {userId} = req.auth()
       
      if (!req.auth || !userId) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const loggedUser = await clerkClient.users.getUser(userId)
  
      const isAdmin = process.env.CLERK_EMAIL === loggedUser.primaryEmailAddress.emailAddress
  
      if (!isAdmin) {
        return res.status(400).json({ message: "You can't make changes" })
      }
  
      next()
    } catch (error) {
      console.error("adminProtection error:", error)
      res.status(500).json('server error in authentication')
    }
  }
  