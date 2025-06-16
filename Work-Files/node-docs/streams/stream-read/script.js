const fs = require("fs/promises");



(async()=>{

    const readFile = await fs.open("cmd.txt", 'r');
    const writeFile = await fs.open("msc.txt", 'w');

    const readStream = readFile.createReadStream()
    const writeStream = writeFile.createWriteStream()

    console.log(readStream.readableHighWaterMark)

    readStream.on('data', (data)=>{

      if(!writeStream.write(data)){
        readStream.pause()
      } 
    })


   writeStream.on('drain',()=>{
    readStream.resume()
   })

   writeStream.on('finish',()=>{
    console.log("file has been copied")
   })
   
   readStream.on('end', ()=>{
    writeStream.end()
   })


})()
