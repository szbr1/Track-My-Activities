import express from 'express'

const route = express.Router()
route.post("/message" , (req,res)=> res.send('Hello this is : message'))


export default route;