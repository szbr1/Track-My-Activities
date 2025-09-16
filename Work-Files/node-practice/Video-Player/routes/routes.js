const express = require("express");
const fs = require("node:fs/promises");
const path = require("node:path");
const router = express.Router();


router.get("/", async(req,res)=>{  //                                              <= html
    try {
        
   

     const fileCheck = await fs.open("./public/index.html", "r")
     const readFileC = fileCheck.createReadStream();

     readFileC.pipe(res)
    } catch (error) {
        console.error(error)
    }
})

router.get("/script.js", async(req,res)=>{  //                                      <= script
    try {
    
     const fileCheck = await fs.open("./public/script.js", "r")
     const readFileC = fileCheck.createReadStream();

     readFileC.pipe(res)
    } catch (error) {
        console.error(error)
    }
})

router.get("/leopard.mp4", async(req,res)=>{  //                                      <= video
    try {
    
     const fileCheck = await fs.open("./public/leopard.mp4", "r")
     const readFileC = fileCheck.createReadStream();

     res.setHeader("Content-Type", "video/mp4")

     readFileC.pipe(res)
    } catch (error) {
        console.error(error)
    }
})

router.get("/720.mp4", async(req,res)=>{  //                                      <= video
    try {
    
     const fileCheck = await fs.open("./public/720.mp4", "r")
     const readFileC = fileCheck.createReadStream();

     res.setHeader("Content-Type", "video/mp4")

     readFileC.pipe(res)
    } catch (error) {
        console.error(error)
    }
})



module.exports = router;
