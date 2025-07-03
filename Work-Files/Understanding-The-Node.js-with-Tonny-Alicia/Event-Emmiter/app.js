// const EventEmmiter = require("./my-custome-emiter")

// const emtr = new EventEmmiter()

// emtr.on("brown", ()=>{
//     console.log("number 1")
// })

// emtr.on("brown", ()=>{
//     console.log("number 2")
// })

// emtr.on("brown", ()=>{
//     console.log("number 3")
// })

// //------
// emtr.emit("brown")




//* how to use utlis.inhertis and how to inherits from event emiter remeber this emiter will be the node emiter

// const EventEmitter = require("events");
// const util  = require("util")


// const Greeter = function(){
//     this.greeting = "Hello Boys"
// }


// util.inherits(Greeter, EventEmitter)

// EventEmitter.prototype.greet = function(){
//   console.log(this.greeting)
//   this.emit('greet')
// }

// const emiter = new Greeter()

// emiter.on("greet", function(){
//     console.log('Welcome')
// })

// emiter.greet()



//--------------//--------------------------//------------------------//--------------------------//
//--------------//--------------------------//------------------------//--------------------------//
//--------------//--------------------------//------------------------//--------------------------//

//! without using class object

// const util = require('util');

// function Person() {
// 	this.firstname = 'John';
// 	this.lastname = 'Doe';
// }

// Person.prototype.greet = function() {
// 	console.log('Hello ' + this.firstname + ' ' + this.lastname);
// }

// function Policeman() {
// 	Person.call(this);
// 	this.badgenumber = '1234';
// }

// util.inherits(Policeman, Person);
// const officer = new Policeman();
// officer.greet();


//! with using class object 



// var EventEmitter = require('events');

// module.exports = class Greetr extends EventEmitter {
// 	constructor() {
// 	// here we use super function no need to use .call method or any lengthy work
// 		super();
// 		this.greeting = 'Hello world!';
// 	}
	
// 	greet(data) {
// 		console.log(`${ this.greeting }: ${ data }`);
// 		this.emit('greet', data);
// 	}
// }


