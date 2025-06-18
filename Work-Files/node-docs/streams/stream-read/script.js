const fs = require("fs/promises");



(async()=>{

    const readFile = await fs.open("cmd.txt", 'r');
    const writeFile = await fs.open("msc.txt", 'w');

    const readStream = readFile.createReadStream({highWaterMark: 64 * 1024})
    // console.log(readStream.readableHighWaterMark)
    const writeStream = writeFile.createWriteStream()

    console.log(readStream.readableHighWaterMark)

    let split = ''

    readStream.on('data', (data)=>{
      const numbers = data.toString("utf-8").split("  ")
      
      if(Number(numbers[0]) !== Number(numbers[1]) - 1){
        if(split){
          numbers[0] = split.trim() + numbers[0].trim()
        }
      }
      console.log(numbers)
      
      
      if(Number(numbers[numbers.length - 2]) + 1 !== Number(numbers[numbers.length - 1])){
        split = numbers.pop()
      }
      
    numbers.forEach((number)=>{
      let n = Number(number);
      if(n % 10 === 0){
        if (!writeStream.write(" " + n + " ")) {
          readStream.pause();
        }
      }
    })


    })

   
   writeStream.on('drain',()=>{
    readStream.resume()
   })

   
   readStream.on('end', ()=>{
    console.log("Done reading")
    // writeStream.end()
   })


})()
