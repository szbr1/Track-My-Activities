const fs = require("fs/promises");
const net = require("net");


const server = net.createServer(()=>{})

let fileHandle, fileStream

server.on("connection",async(socket)=>{
    fileHandle = await fs.open("Storage/toxic.txt", "w");
    fileStream = fileHandle.createWriteStream();


    socket.on("data",(data)=>{
     
        
        fileStream.write(data)
    })

    socket.on("end", async () => {
        console.log("Connection has been ended.");
        fileStream.end(); // ✅ Close the stream
        await fileHandle.close(); // ✅ Close the file handle
      });
})



server.listen(5050, "::1", ()=>{
    console.log("Server is Running on :", server.address())
})

