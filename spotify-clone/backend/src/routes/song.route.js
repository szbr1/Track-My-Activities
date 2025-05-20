import express from 'express'

const route = express.Router()
route.get("song" , (req,res)=> res.send('Hello this is : song'))


export default route;