const fs = require("node:fs/promises");
const http = require("node:http");


class Butter {
    constructor(){
        this.routes = {}
        this.server = http.createServer()
        this.middleware = []
        

        this.server.on("request",(req,res)=>{
            res.sendFile = async(path, mimi)=>{
                const file = await fs.open(path, "r")
                const readStream = file.createReadStream()
              
                res.setHeader("Content-Type", mimi)
  
                readStream.pipe(res)
              }

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
          

            if (this.middleware[0])
                this.middleware[0](req, res, () => {
                  if (this.middleware[1])
                  this.middleware[1](req, res, () => {
                    if (this.middleware[2])
                    this.middleware[2](req, res, () => {
                      if (this.middleware[3])
                      this.middleware[3](req, res, () => {
                        if (this.middleware[4])
                        this.middleware[4](req, res, () => console.log("the end"))
                      })
                    })
                  })
                })
                
            
        })


    }

    route(method,path,fc){
        this.routes[method+path] = fc
    }
    
    getBefore(cb){
      this.middleware.push(cb)
    }
    

    listen(port,cl){
     this.server.listen(port,cl);
    }
}

module.exports = Butter;