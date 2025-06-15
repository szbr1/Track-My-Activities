// // ? Day 2 : 14/06/2025


// ! EventEmitter 
// const EventEmitter  = require('events')

// class Emiter extends EventEmitter {}

// const emiter = new Emiter()

// emiter.on('karlo',()=>{
//     console.log("My name is shahziab")
// })

// emiter.emit('karlo')

// //! Buffers 

// const {Buffer} = require("buffer")

// //lenghty way
// //*const bf = Buffer.alloc(3)
// // bf[0] = 0x48
// // bf[1] = 0x69
// // bf[2] = 0x21


// //short way 
// //* const bf = Buffer.from([0x48, 0x69, 0x21])

// //shorter way 
// //* const bf = Buffer.from ("486921", "hex")


// // console.log(bf.toString('utf-8'))


// //shortest way 
// const bf = Buffer.from("Hello", "utf-8")
// console.log(bf) // this will be the hex data in of this
// console.log(bf.toString("utf-8"))


// //!how buffers shows on cpu with taskbar

// const {Buffer} = require("buffer")

// const buff = Buffer.alloc(0.5e9)

// setInterval(()=>{
//     for(let i = 0; i < buff.length; i++){
//      buff[i] = 0x22
//     }
// })

//// ! File System    

// const fs = require("fs")

// fs.writeFileSync("file.txt",'my namd is ')

// const read = fs.readFileSync("file.txt")

// console.log(read.toString('utf-8'))

 //_____________________________________________________________________________________________________
 ////!fs wathc 
// _____________________________________________________________________________________________________

// const fs = require("fs/promises");


// (async () => {
//     try {
//       await  fs.copyFile("file.txt", "updated.jsx")
//         console.log("File created Successfully")
//     } catch (error) {
//         console.error(error)
//     }
//     })();

//_______)))))))___________)))__________)________)))))__________________________________________________________

// //! fs watcher 

//  const fs = require("fs/promises");


// (async() => {

//    try {
//       const watcher = fs.watch("./")

//       for await(const event of watcher){
//           if(event.eventType ===  'change' && event.filename === "file.txt"){
//             console.log("file changes occurs")
//           }
//       }

//    } catch (error) {
//     console.error(error)
//    }
// })()




//----------------------------------------------------
// const fs = require("fs/promises");

// (async () => {
//   const commandFileHandler = await fs.open("./command.txt", "r");

//   commandFileHandler.on("change", async () => {
//     // get the size of our file
//     const size = (await commandFileHandler.stat()).size;
//     // allocate our buffer with the size of the file
//     const buff = Buffer.alloc(size);
//     // the location at which we want to start filling our buffer
//     const offset = 0;
//     // how many bytes we want to read
//     const length = buff.byteLength;
//     // the position that we want to start reading the file from
//     const position = 0;

//     // we always want to read the whole content (from beginning all the way to the end)
//     const content = await commandFileHandler.read(
//       buff,
//       offset,
//       length,
//       position
//     );

//     console.log(content);
//   });

//   // watcher...
//   const watcher = fs.watch("./command.txt");
//   for await (const event of watcher) {
//     if (event.eventType === "change") {
//       commandFileHandler.emit("change");
//     }
//   }
// })();



//! How to create file with node on any path 

const fs = require("fs/promises");

// const text = "create new file";
  

(async () => {
    
   ////! create file fc
    // const createFile = async( path )=>{
    //    if(!path) return;
    //    try {
    //    const filereading = await fs.open(path , 'r')
    //    filereading.close()
    //     console.log("this file exist already path:",path)

    //    } catch (error) {
    //     const fileCreate  = await fs.open(path, "w")
    //     console.log("file created")
    //     fileCreate.close()
    //    }
    // }

    // const renameFile = async(oldPath, newPath)=>{
    //     if(!oldPath || !newPath) return;
    //     await fs.rename(oldPath, newPath)
    //     console.log("success")
    // }
  ////! add text to the file fc
    // const editFile  = async (path, content)=>{
    //     if(!path) return;
    //     await fs.writeFile(path, content)
    //     console.log("success true")
    // }

  //! remove file fc
    const removeFile = async(path)=>{
    if(!path) return;
    await fs.unlink(path)
    }
    
    
  try {
    // const rFile = "rename the file"
    // const edit = "edit the file"
    const remove = "remove the file"

    const commandFile = await fs.readFile("command.txt", "utf8"); 


//     console.log(commandFile.includes(text)) // true or false
// // this substring will give the starting position 
//     const path = commandFile.substring(text.length + 1 )
//     createFile(path)
 
     //! renaem the file
    // if(commandFile.includes(rFile)){
    //     const idx = commandFile.indexOf(" to ")
    //     const oldPath = commandFile.substring(rFile.length + 1 , idx)
    //     const newPath = commandFile.substring(idx + 4)
    //     renameFile(oldPath, newPath)

    // }

//    //! to add text to the file 
//    if(commandFile.includes(edit)){
//     const idx = commandFile.indexOf(" content: ")
//     const pathName = commandFile.substring(edit.length + 1 , idx)
//     const content = commandFile.substring(idx + 10)
//     console.log("pathName", pathName  ," content: ", content)
//     editFile(pathName,content)
//    }

//! to delete the file 
    if(commandFile.includes(remove)){
       const path = commandFile.substring(remove.length + 1)
       removeFile(path)
    }
     
    
  } catch (err) {
    console.error("Error reading file:", err);
  }
})();





