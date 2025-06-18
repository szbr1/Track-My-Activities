// const fs =  require("fs/promises");

// //! With Buffers
// //*bad way to achieve this 

// //memory usage very high

// // (async()=>{
// //     const readFile = await fs.readFile("cmd.txt");
// //     const writeFile = await fs.open("copy.txt", "w")

// //     writeFile.write(readFile)


// // })()

// //! With Buffers
// // //*good way to achieve this 
// // //very low memory usage that  is helpful
// // // even with havy files the memory usage will be 30 to 50mb very optimized;

// // (async()=>{
// //    const readFile = await fs.open("cmd.txt", "r");
// //    const writeFile = await fs.open("copy.txt", "w")

// //    let data = -1 

// //    while(data !== 0){
// //     const gian =await readFile.read()
// //     data = gian.bytesRead

// // // we are using this state expression bcz at some position buffer will be zero like half data and half zeros at the end so it will send null to us in file save 
// //     if(data !== 16384){
// //          //this will get that on what position zero is spotted let at index 5 so it will give 5
// //         const indexOfZero = gian.buffer.indexOf(0)
        
// //         const buff = Buffer.alloc(indexOfZero)
// //         //here copy(target, starting position, source starting position, source ending position)
// //         gian.buffer.copy(buff, 0, 0, indexOfZero)
// //         //.copy is doing that storing all the data from zero to indexOFZero
// //         writeFile.write(buff)
// //     }else{
// //     writeFile.write(gian.buffer)
        
// //     }
// //    }

// // })()

// //! With Streams
// //* Best way to achieve this 

// //it will use very less amount of memory usage even with big large giant files ;
// // it will be very faster than all other ;
// //it is optimized ;
// //.pipe() method automatically handled pause countinue measn back pressuse;
// // simple easy to understand and clean even no need to clean null using statement exrepression 

// (async()=>{
    
    
//     const writeFile = await fs.open("copy.txt", "w");
//     const readFile = await fs.open("cmd.txt", "r");
    
//     const readStream = readFile.createReadStream()
//     const writeStream = writeFile.createWriteStream()

//     //pipe() is the ideal way to achieve
//     // it will autommatilcally handle the back pressuer continure pause;
//     readStream.pipe(writeStream)
    


    
// })()


const fs = require("fs/promises");

(async()=>{


   const buff =  Buffer.alloc()

   
    
    
})()

