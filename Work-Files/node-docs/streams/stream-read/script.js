const fs = require("fs/promises");



(async()=>{

    const readFile = await fs.open("cmd.txt", 'r');
    const writeFile = await fs.open("msc.txt", 'w');

    const readStream = readFile.createReadStream({highWaterMark: 64})
    console.log(readStream.readableHighWaterMark)
    const writeStream = writeFile.createWriteStream()

    console.log(readStream.readableHighWaterMark)

    readStream.on('data', (data)=>{
      const numbers = data.toString().split(" ")
      
    //  if(Number(numbers.length))


      
      console.log((numbers.length))
      console.log(numbers[numbers.length -2])
      // console.log(Number(numbers[numbers.length()]))
      // console.log(Number(numbers[numbers.length -1]))



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
