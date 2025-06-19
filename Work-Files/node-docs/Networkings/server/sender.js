const net = require('net');


const socket = net.createConnection({host: 'localhost', port: 8000},()=>{
    socket.write("Hello my name is shahzaib")
})