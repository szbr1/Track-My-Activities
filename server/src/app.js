import express from 'express';
import apiRoute from './Routes/api.js'
import dotenv from 'dotenv'
import monogoDB from './utils/db.js';



const app = express();
dotenv.config()
app.use(express.json())

app.use('/api', apiRoute);

monogoDB()
app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
