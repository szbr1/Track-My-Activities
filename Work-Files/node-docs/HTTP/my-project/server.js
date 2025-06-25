//Using post i have to save the comments in seprate filej
//show all comments using get request
// and want to know when a requst is made the using new Date()
const fs = require("node:fs/promises");
const http = require("node:http");


const server = http.createServer()

let ex = ""
server.on("request",(req,res)=>{
    
   let dates = []
    req.on('data',(data)=>{
    ex +=  data.toString("utf-8")
    dates += new Date()
    
   
    })
    
 req.on("end",async()=>{

     const file =  await fs.open("cmd.txt", "w");
     const streamFile = file.createWriteStream()
     
     const Buff = Buffer.alloc(64)
     Buff.write(ex, "utf-8")
     streamFile.write(Buff)
     
     streamFile.on('drain',()=>{
         streamFile.write(Buff)
        })
        streamFile.on("finish",()=>{
            file.close()
            streamFile.end()
            
        })
        
    })
  
})


server.listen(6888,()=>console.log("server is run on http://localhost:6888"))



