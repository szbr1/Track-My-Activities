const fs = require("fs/promises");
const { Transform } = require("node:stream");


class decrypt extends Transform{
     
    _transform(chunks,encoding,callback){
  // here just removing -1 from each value of buffer to get decrypted file
    for(let i = 0; i < chunks.length; i++)
        if(chunks[i] !== 255){
            chunks[i] = chunks[i]- 1
        }
        callback(null, chunks)
    }

    
}

(async()=>{

    const writeFile =  await fs.open("decrypt.txt", "w" );
    const readFile = await fs.open("encrypt.txt", "r");

    const writeStream  = writeFile.createWriteStream()
    const readStream  =  readFile.createReadStream()
    
    const decrypted = new decrypt();

    readStream.pipe(decrypted).pipe(writeStream)
    
})()