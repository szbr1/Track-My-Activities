import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()

app.use(express.json)

app.listen(6990 ,()=>{
    console.log("server 6990")
})