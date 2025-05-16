import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import Routes from '../src/routes/auth.routes.js'

dotenv.config()
const app = express()
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use('/api', Routes)
const Host = process.env.HOST
app.listen(Host , ()=>{
    console.log('http://localhost:8000')
})
