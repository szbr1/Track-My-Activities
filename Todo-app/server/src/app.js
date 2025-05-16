import express from 'express';
import apiRoute from './Routes/api.js'
import dotenv from 'dotenv'
import monogoDB from './utils/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'



const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))
  
dotenv.config()
app.use(cookieParser())
app.use(express.json())

app.use('/api', apiRoute);

monogoDB()
app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
