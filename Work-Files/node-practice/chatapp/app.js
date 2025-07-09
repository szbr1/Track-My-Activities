const net = require("net");

const server = net.createServer((socket) => {
    console.log("New user connected");

    socket.on("data", (data) => {

        setTimeout(() => {
           socket.write( data.toString("utf-8"));
        
       }, 1000);

    });


    socket.on("end", () => {
        console.log("User disconnected");
    });
});

server.listen(3999, () => {
    console.log("Server is live:", server.address());
});
