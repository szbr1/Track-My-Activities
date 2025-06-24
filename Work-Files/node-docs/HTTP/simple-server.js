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
  
  if(request.url === "/styles.css" && request.method === "GET"){
    response.setHeader("Content-Type", "text/css")
    const filehandle = await fs.open("./public/styles.css", "r")
    const fileStream = filehandle.createReadStream()
    
    fileStream.pipe(response)
  }

  if(request.url === "/script.js" && request.method === "GET"){
    response.setHeader("Content-Type", "text/javascript")
    const filehandle = await fs.open("./public/script.js", "r")
    const fileStream = filehandle.createReadStream()
    
    fileStream.pipe(response)
  }


  if(request.url === "/favicon.ico" && request.method === "GET"){
    response.setHeader("Content-Type", "image/png")
    const filehandle = await fs.open("./public//favico.png", "r")
    const fileStream = filehandle.createReadStream()
    
    fileStream.pipe(response)
  }
  
  if(request.url === "/login" && request.method === "POST"){
    response.setHeader("Content-Type", "application/json")
    response.statusCode = 200

    const data = {
      message: "The request reached"
    };
// if i use this .write so server will request will think still data will come there is no end so it will keep loading in loop
    //* response.write(JSON.stringify(data))
// but with this request knows the request has been ended and this was the last data
   response.end(JSON.stringify(data))
  }

  
//! with this we can upload files from client to server using http
  if(request.url === "/uploader" && request.method === "PUT"){
    response.setHeader("Content-Type", "application/json")
    response.statusCode = 200

     const handleFile = await fs.open("./storage/image.png", "w")
     const streamFile = handleFile.createWriteStream()

     request.pipe(streamFile)

     request.on("end",()=>{
       response.end(JSON.stringify({message: "file uploaded successfully"}))
     })

     console.log("here is the this",this)
  }

})






server.listen(8000,()=>{
  console.log("Server is running on http://localhost:8000")
})






