const { Server } = require("socket.io");
const express = require("express");
const http = require("node:http");


//! let's create the server connections 

// this is the  express server connection
const app = express()

// this is http server connection 
const server = http.createServer(app);

// this is the socket io server connection 
const io = new Server(server);


//routes 
app.get("/", (req,res)=>{

 res.sendFile(__dirname+ "/public/index.html")
})


// sockets working 

// socket is use to make comunicaion between server and client(browser)
// this connection is live real time 
// using connection and console it run-
// -each time whenever new user connects with the server 

io.on("connection", (socket)=>{           //                               <== Connection

    // io is the server  and it's parameter is the socket 

    console.log("✅ New Connection Created")
    // this will call automatically whenever any of user will diconnect-
    // -means leave the browser change the.

    socket.on("disconnect", ()=>{         //                               <== Diconnection
        console.log("❌ User is Disconnected")
    })

    // here i will create my functionality 
    // emit is uses to emit means perform or you say-
    // -send information from the emit side to the recieving side 
    // it means here what we do we send data from server to client 

    socket.emit("message", "Welcome Again ")  //                             <== Sending 

    // Befor we had send the data know we will-
    // -recieve the data from client that client  emit to us 

    socket.on("clientMessage", (data)=>{      //                             <== Recieving
        console.log(data)
    })


})




//start server
server.listen(9000, ()=>{
    console.log("Server is Live: http://localhost:9000 \n ", server.address())
    
})
