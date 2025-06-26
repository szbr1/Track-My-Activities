// const fs = require("node:fs");
// const path = require("path")
// require("./script.js");



// const filewrite = fs.readFileSync(path.join(__dirname, "./text.txt"), "utf-8")
// console.log(filewrite)



stdin.on("data",(data)=>{
    console.log(data.toString('utf-8'))
})

stderr.write("Some Weired text")

stdout.write("Some Text")