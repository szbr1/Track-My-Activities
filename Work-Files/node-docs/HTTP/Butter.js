const fs = require("node:fs/promises");
const http = require("node:http");


class Butter {
    constructor(){
        this.routes = {}
        this.server = http.createServer()
        

        this.server.on("request",(req,res)=>{
 

            res.status = (code)=>{
                res.statusCode = code
                return res
            }
            res.json = (data)=>{
                res.setHeader("Content-Type", "Application/json")
                res.end(JSON.stringify(data))
            }
        
            if(!this.routes[req.method.toLowerCase() + req.url]){
                res.status(400).json({message: "Please make a valid request "})
                return;
            }

            this.routes[req.method.toLowerCase() + req.url](req,res)

            res.sendFile = async(path, mimi)=>{
              const file = await fs.open(path, "r")
              const readStream = file.createReadStream()
            
              res.setHeader("Content-Type", mimi)

              readStream.pipe(res)
            }
            
          console.log("new user connected")
        })


    }

    route(method,path,fc){
        this.routes[method+path] = fc
    }
    
    

    listen(port,cl){
     this.server.listen(port,cl);
    }
}

module.exports = Butter;