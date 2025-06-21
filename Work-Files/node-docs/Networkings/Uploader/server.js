const fs = require("fs/promises");
const net = require("net");


const server = net.createServer(()=>{})

server.on("connection",(socket)=>{

    socket.on("data",async(data)=>{
        const fileHandle = await fs.open("Storage/toxic.txt", "w");
        const fileStream = fileHandle.createWriteStream();

        fileStream.write(data)
    })
})



server.listen(5050, "::1", ()=>{
    console.log("Server is Running on :", server.address())
})

