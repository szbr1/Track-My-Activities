const EventEmmiter = require("./my-custome-emiter")

const emtr = new EventEmmiter()

emtr.on("brown", ()=>{
    console.log("number 1")
})

emtr.on("brown", ()=>{
    console.log("number 2")
})

emtr.on("brown", ()=>{
    console.log("number 3")
})

//------
emtr.emit("brown")