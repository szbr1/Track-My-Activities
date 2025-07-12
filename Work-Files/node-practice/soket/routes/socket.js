const {Server}  = require("socket.io");



const initSocket = (server)=>{


   const io =  new Server(server,{
        cors: {
            origin: "10.86.51.90:7009",
            credentials: true
        }
    })
   let users = 0
    io.on("connection", (socket)=>{

       
    socket.on("message", ()=>{
        console.log("hello Jhon how are your")
    })

    socket.on("msg",({data})=>{
        console.log(data)
        io.emit("yes", data)
    })


    })


    
    
}



module.exports = initSocket;