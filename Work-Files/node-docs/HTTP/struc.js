const fs = require("node:fs/promises");
const http = require("node:http");


const server = http.createServer()

server.on("request",async(req,res)=>{

    const imageFile = await fs.open("/storage/image.png", "r")
    const streamImage  = imageFile.createReadStream()

    res.setHeader("Content-Type", "image/png")
    res.statusCode = 200

    streamImage.pipe(res)
    
 
})


server.listen(3000, ()=>{
    console.log("http://localhost:3000")
})


