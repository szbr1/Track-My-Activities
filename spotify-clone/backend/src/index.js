import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectionDB from './lib/db.js'


const app = express()

dotenv.config()
app.use(express.json())
let ORIGIN = process.env.ORIGIN
app.use(cors({
    origin: `http://localhost${ORIGIN}`,
    credentials: true
}))


// app.use('/api', usersRoutes)
// app.use('/api', songsRoutes )
// app.use('/api', albumRoutes )
// app.use('/api', statsRoutes)

app.get('/',(req,res)=>res.send('Hello Boys'))

const PORT = process.env.PORT

//Database connection
connectionDB()

app.listen(PORT, ()=>{
    console.log("http://localhost:"+PORT)
})