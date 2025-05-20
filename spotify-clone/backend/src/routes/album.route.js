import express from 'express'

const route = express.Router()
route.get("/album" , (req,res)=> res.send('Hello this is : album'))


export default route;