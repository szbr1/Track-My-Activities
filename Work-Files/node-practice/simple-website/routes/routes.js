const express = require("express");
const fs = require("node:fs/promises");
const path = require("node:path");
const router = express.Router();


router.get("/", async(req,res)=>{
    try {
        
   

     const fileCheck = await fs.open("./public/index.html", "r")
     const readFileC = fileCheck.createReadStream();

     readFileC.pipe(res)
    } catch (error) {
        console.error(error)
    }
})

router.get("/hello.pdf", async(req,res)=>{
    try {
        
   

     const fileCheck = await fs.open("./public/hello.pdf", "r")
     const readFileC = fileCheck.createReadStream();

     readFileC.pipe(res)
    } catch (error) {
        console.error(error)
    }
})



module.exports = router;
