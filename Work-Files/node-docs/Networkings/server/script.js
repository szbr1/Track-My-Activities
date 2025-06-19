const net = require("net");


const app = net.createServer((socket)=>{
    socket.on('data',(data)=>{
        console.log(data.toString())
    })
})




app.listen(8000, ()=>{
    console.log('http://localhost:8000')
})