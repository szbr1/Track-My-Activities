const net = require("net");



const server = net.createServer()


let client = [];
server.on("connection",(socket)=>{

   

   const clientId = client.length + 1
   socket.write(`id-${clientId}`)

    socket.on('data', (data)=>{
        const dataString = data.toString("utf-8");
        const id = dataString.substring(0, dataString.indexOf("-"));
        const message = dataString.substring(dataString.indexOf("-message-") + 9);


     client.map((s)=>{
        s.socket.write(`> User ${id}: ${message}`);
     })
 
 })

 client.push({socket, id: clientId.toString()})
 })




server.listen(3999, ()=>{
    console.log("Server is running")
})