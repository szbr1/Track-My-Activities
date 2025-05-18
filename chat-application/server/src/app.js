import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import AuthRoutes from './routes/api.js'
import MsgRoutes from './routes/msg.api.js'
import monogoDB from './lib/db.js'

dotenv.config()
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.211.90:3000'],
    credentials: true
}))

//routes
app.use('/api', AuthRoutes)
app.use('/api', MsgRoutes)

//database connection
monogoDB()

const PORT = process.env.HOST
app.listen(PORT , ()=>{
    console.log('http://localhost:8000')
})
