//? Day 2 : 14/06/2025


//! EventEmitter 
// const EventEmitter  = require('events')

// class Emiter extends EventEmitter {}

// const emiter = new Emiter()

// emiter.on('karlo',()=>{
//     console.log("My name is shahziab")
// })

// emiter.emit('karlo')

//! Buffers 

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


//!how buffers shows on cpu with taskbar

// const {Buffer} = require("buffer")

// const buff = Buffer.alloc(0.5e9)

// setInterval(()=>{
//     for(let i = 0; i < buff.length; i++){
//      buff[i] = 0x22
//     }
// })
