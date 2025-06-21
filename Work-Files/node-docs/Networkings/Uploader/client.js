const fs = require("fs/promises");
const net = require("net");


const socket = net.createConnection({host:"::1", port: 5050}, async()=>{

  const fileHandle = await fs.open("text.txt", "r");
  const fileStream = fileHandle.createReadStream();

  fileStream.on("data",(data)=>{
    socket.write(data)
  })

  fileStream.on("end",async()=>{
    console.log("File has been uploaded successfully.")
   await fileHandle.close()
   socket.end()
  })
    
    

})