import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectionDB from './db.js';
import authRoutes from './authUserRoutes/auth.route.js';






const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()


app.use('/api', authRoutes,)

 const PORT = process.env.PORT
 connectionDB()
app.listen(PORT, ()=>{
    console.log('http://localhost:8000/api/load')
})