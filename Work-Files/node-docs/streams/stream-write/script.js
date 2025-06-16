// const fs = require("fs/promises");


// (async()=>{
//    console.time()
//     const filename  = await fs.open("cmd.txt", "w");
    
    
//     for (let i = 0; i < 1000000; i++){
//         filename.write(` ${i} ` )
//     }
//     console.timeEnd()
// })()





// Stream use with Buffer 
// Stream 
// Buffer 

//task: we have to use buffer if we have the 1million numbers of data 



const fs  = require("fs/promises");

(async()=>{
    
    console.time()


    //file connection
    const filename =  await fs.open("cmd.txt", "w")

    //make stream 
    const stream = filename.createWriteStream()

    let i = 0;
    const max = 100000000000000;



    function writeFile (){
    try {
        
   
        
        while(i < max){
            const buff = Buffer.from(` ${ i } `, "utf-8");
            // stream.write(buff)
        
            if(i === max - 1){
               return stream.end(buff)
            }
            if(!stream.write(buff)) break;

            i++
        }
    } catch (error) {
        console.error(error)
    }

    }

      writeFile()

        
        stream.on("drain", ()=>{
           writeFile()
        })

        console.timeEnd()

    
    
})()