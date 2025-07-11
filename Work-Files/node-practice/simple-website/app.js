const express = require("express");
const cors = require("cors")
const AllRoutes = require("./routes/routes")


const app = express()
app.use(cors({
 origin: "10.86.51.90:7000",
 credentials: true
}))

app.use("/", AllRoutes)


app.listen(7000, ()=> console.log("http://localhost:7000"));
