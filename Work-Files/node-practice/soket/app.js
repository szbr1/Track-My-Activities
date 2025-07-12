const express = require("express");
const AllRoutes = require("./routes/routes")
const initSocket = require("./routes/socket");
const http = require("http")

const app = express()

const server = http.createServer(app)

initSocket(server)
app.use("/", AllRoutes)


server.listen(7009, ()=> console.log("http://localhost:7009", server.address()));
