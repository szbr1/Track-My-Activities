//? Day 2 : 14/06/2025


//! EventEmitter 
const EventEmitter  = require('events')

class Emiter extends EventEmitter {}

const emiter = new Emiter()

emiter.on('karlo',()=>{
    console.log("My name is shahziab")
})

emiter.emit('karlo')