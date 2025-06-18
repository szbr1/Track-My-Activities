const fs = require("fs/promises");
const { Transform } = require("node:stream");


class ecrypt extends Transform{
     
    _transform(chunks,encoding,callback){

    for(let i = 0; i < chunks.length; i++)
        if(chunks[i] !== 255){
            chunks[i] = chunks[i]+ 1
        }
        callback(null, chunks)
    }

    
}

(async()=>{

    const writeFile =  await fs.open("encrypt.txt", "w" );
    const readFile = await fs.open("custom.txt", "r");

    const writeStream  = writeFile.createWriteStream()
    const readStream  =  readFile.createReadStream()
    
    const encrypted = new ecrypt();

    readStream.pipe(encrypted).pipe(writeStream)
    
})()
