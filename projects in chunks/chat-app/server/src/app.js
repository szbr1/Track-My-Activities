import express from "express"
import "dotenv/config"
import userRoute from "./routes/user.js"
import roomRoute from "./routes/roomId.js" 
import MessageRoute from "./routes/chat.js" 
import { connectDB } from "./config/db.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(cookieParser())
app.use(express.json())


app.use( "/api/",      userRoute    )
app.use( "/api/room/", roomRoute    )
app.use( "/api/chat/", MessageRoute )


const PORT = process.env.PORT || 7000
console.log(PORT)
connectDB()
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})