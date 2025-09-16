import express from "express"
import "dotenv/config"
import userRoute from "./routes/user.js"

const app = express()
app.use(express.json())


app.use("/api/", userRoute)


const PORT = process.env.PORT || 7000
console.log(PORT)
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})