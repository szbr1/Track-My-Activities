import express from "express"
import User from "../controllers/user.model.js";

const route = express.Router()


route.post("/new-user", async (req,res)=>{
    try {
        

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "The Server is Not Working Try Again Later."})
    }
} )


export default route;