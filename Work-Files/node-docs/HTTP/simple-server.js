const http = require("node:http");
const fs = require("node:fs/promises");

const server = http.createServer()

server.on("request",async(request,response)=>{

  if(request.url === "/" && request.method === "GET"){
    response.setHeader("Content-Type", "text/html")
    const filehandle = await fs.open("./public/index.html", "r")
    const fileStream = filehandle.createReadStream()
    
    fileStream.pipe(response)
  }
})

server.listen(8000,()=>{
  console.log("Server is running on http://localhost:8000")
})