
//* execution context

// function a(){
//    var myValue;
//    console.log(myValue)
// }

// function b(){
//     var myValue = 2;
//     console.log(myValue)
//     a()
//  }

//  var myValue = 1 
//  console.log(myValue)
// b()


//! /1,2,undefined


//*lexical environment 

// function a(){
//     console.log(myValue) 
//     }
    
//     function b(){
//     var myValue = 2
//     a()
    
//     }
    
//     myValue = 1 
//     b()
    
    //!the output in terminal
   //!  will be = 1 
    


//    const structure = new Object()

//    structure["filename"] = 'rar'

//    const manager = filename

//    console.log(structure.manager)



// function greet(){
//     console.log('hi')
// }

// greet.filename = 'hello'

// console.log(greet())// will return whole function 
// console.log(greet().filename) // hello that was not in whole function 


// //! function statement and function expression 

// //whate is function statement 

// //let's create function statement 

// //*example 1
// function greet(){
//     console.log(Hello)
// }
// //*example 2
// if()  // this is called function statement as well



// // now let'st create function expression 


// //example 1
// const color = function(){
//     console.log("print color")
// }// this is function expression 

// //example 2 
// if(a == 2) // this is called funtion expression as well 

// //--------------------------------------------



// //! by value (primitives)
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a);
// console.log(b);

// //! by reference (all objects (including functions))
// var c = { greeting: 'hi' };
// var d;

// d = c;
// c.greeting = 'hello'; // mutate

// console.log(c);
// console.log(d);

// // by reference (even as parameters)
// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; // mutate   
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // equals operator sets up new memory space (new address)
// c = { greeting: 'howdy' };
// console.log(c);
// console.log(d);


//! let's use this 

//* console.log(this) 
//output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//* function hello(){
//*     console.log(this)
//* }

//*hello()

//this will return same thing //output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// *function color(){
//  *   this.colorVariable = "somethingNew"
// *}

//* color()

//* console.log(colorVariable)
// output: something new 



// const c = {
//     name : "shahzaib" , // in obj the value is primitve  called property but if have function called method

//     changeName: function(){ // so here this is a method not a peroperty -> let's dive in this 
//         this.name = 'Ali'
//         console.log(this)
//         function setName(ral){
//             this.name  = ral
//             console.log(this)
//         }
//         setName("shahzaib Ali")
       
//     }

    
// }

// console.log(this.name)
// c.changeName()


//! imidiate invocked funtion expression
//ex 1

// const greeting = function(){
//     console.log("hello")
// }();

//ex 2

// (function(name){
//   console.log(name)
// }('jhon'))





//-----------------------------

// const color = "Yellow"
// console.log(`1: ${color}`)
// function geeting(){
//     const color = "Pink"
//     console.log(`i am Color: ${color}`)
// }

// console.log(`2:${color}`)
// geeting();



//! clousers 
//*example 1
// function karlo (){
//        const arr = []

//        for(const i = 0; i < 3 ; i++){
//         arr.push(function(){
//             console.log(i)
//         })
//        }
//        return arr
// }
// const fc = karlo()

// fc[1]()
// fc[0]()
// fc[2]()


//* example 2

// function brown(){
//     const x = 1

//     return function(){
//         const y = 2
//         console.log(y * x)
//     }
// }

// const call = brown()
// call()

//* example 3

// function factory(ln){
//     return function(firstname, lastname){
//        if(ln === "en"){
//          console.log(`How may i can help you ${firstname} ${lastname}`)
//         }
//         if(ln === "ur"){
//            console.log(`G btaiya ${firstname} ${lastname} hum apki kis trah madad kr saktya hain ` )

//        }
//     }
// }

// const langA = factory("en")
// const langB = factory("ur")

// langA("shahzaib", "Mirza")
// langB("ALiza", "Mam")


//! bind()
 // const color = {
//     firstName: "Shahzaib",

//     getName : function(){
//       const name = this.firstName
//       return name;
//     }
// }

// function authCheck(lan){
//     console.log("Logged",this.getName(),lan)
// }
//!bind
// const copy = authCheck.bind(colors);

// copy('urdu')
//explained call under this
//!call
// authCheck.call(colors,"english") // and aslo give the parameter
//!apply
// authCheck.apply(colors,["english"]) // and aslo give the parameter but in array[]



//---------------------------------------------------------

//! call()


//actually call work as bind but it calls the funtion imidiatly 
// we can also call a funtion like this =>
//*const color = ()=>console.log("hello")
// so rather than calling a funtion like 
//* color()
// what we can do 
//* color.call


//but one important thing you want to now how
//  //!call
//  work as a 
// //!bind

// const colors = {
//     firstName: "Shahzaib",

//     getName : function(){
//       const name = this.firstName
//       return name;
//     }
// }

// function authCheck(lan){
//     console.log("Logged",this.getName(),lan)
// }

//here is we gonna call it 
// authCheck.call(colors,"english") // and aslo give the parameter


//!functional programming 


// function callerFun(arr, binder){
//   const products = []

//    for(let i = 0; i < arr.length; i++){
//      products.push(binder(i))
//    }

//    return console.log(products)
// }


// const arr= [1,2,3,4]
// console.log(arr)

// function binder( checker){
   
//    return checker < 2
// }

// callerFun(arr, binder)

//! prototype

// const product = {
//    lastname: "Default"
// }
// const jhon = {
//    firstname: "Jhon",
   
// }

// jhon.__proto__ = product

// console.log(jhon.lastname)


// const john = {
//    firstname: "Jhon",
//    lastName: "Die",
   
// }

 //* 2.

// const person = {
//    firstName: "Default",
//    lastName: "Default",
//    getFullName: function(){
//       console.log(this.firstname ," ", this.lastName)
//    }
// }

// console.log("first:", john.prop)
// john.__proto__ = person 
// console.log("second: ", john["firstname"])


// for(const prop in john){
//    if(john.hasOwnProperty(prop)){
//       console.log(prop , )
//    }
// }

//* Functional constructor and prototype 
// 1. Defining the "Dog" Blueprint (using a constructor function)
//    Think of 'Dog.prototype' as our actual blueprint object.
// *function Dog(name, breed) {
 //*  this.name = name; // Each dog instance will have its own name
  //* this.breed = breed; // Each dog instance will have its own breed
   // We don't put 'bark' here because every dog barks the same way,
   // so we put it on the prototype to be shared.
// *}

// 2. Adding a common behavior to the Dog Blueprint (prototype)
//    All dogs created from this blueprint will "inherit" the 'bark' method.
//* Dog.prototype.bark = function() {
  //* console.log(`${this.name} says Woof!`);
// *};

// 3. Creating Dog Instances (Gadgets from the blueprint)
//* const buddy = new Dog("Buddy", "Golden Retriever");
//* const lucy = new Dog("Lucy", "Beagle");

// 4. Accessing Properties and Methods:

// Buddy has his own 'name' and 'breed'
//* console.log(buddy.name); // Output: Buddy
//* console.log(buddy.breed); // Output: Golden Retriever

// Buddy uses the 'bark' method from the Dog.prototype (the blueprint)
//* buddy.bark(); // Output: Buddy says Woof!

// Lucy also uses the *same* 'bark' method from the Dog.prototype
//* ucy.bark(); // Output: Lucy says Woof!

// 5. Inspecting the Prototype Chain:

// How does JavaScript find 'bark' for 'buddy'?
// It checks buddy.bark (not found)
// Then it checks buddy's prototype (Dog.prototype). Found!

// You can see the prototype relationship:
// *console.log(Object.getPrototypeOf(buddy) === Dog.prototype); // Output: true
// *console.log(Object.getPrototypeOf(lucy) === Dog.prototype);  // Output: true

// And what's Dog.prototype's prototype? It's the base Object.prototype.
// *console.log(Object.getPrototypeOf(Dog.prototype) === Object.prototype); // Output: true

// And Object.prototype's prototype is null, which ends the chain.
//* console.log(Object.getPrototypeOf(Object.prototype)); // Output: null

// 6. Changing the Blueprint (Prototype)
//    If we change the blueprint, all existing and future instances inherit the change.
//* Dog.prototype.sleep = function() {
 // *  console.log(`${this.name} is sleeping.`);
// *};

// *buddy.sleep(); // Output: Buddy is sleeping.
// *lucy.sleep(); // Output: Lucy is sleeping.

// 7. Overriding on an Instance
//    You can give an individual dog its *own* special bark.
//* buddy.bark = function() {
//*    console.log(`B-b-b-buddy says grrrrr.`);
//* };

// *buddy.bark(); // Output: B-b-b-buddy says grrrrr. (Buddy's own bark)
// *lucy.bark();  // Output: Lucy says Woof! (Lucy still uses the blueprint's bark)

//! we can make changes or create inbuilt....
// Date.prototype.today = function(){
//    return this.getDay()+"/"+this.getMonth()+"/"+this.getFullYear()
// }

// const color = new Date()

// console.log(color.today())


//! object.create 

// const topic = {
//    name:  "dog",
//    bread: "parsian",
//    test: function(){
//       return this.name + "hello"+ this.bread
//    }
// }


// const alerting = Object.create(topic)

// alerting.name = "Bolly"

// console.log(alerting, alerting.name)


//! jQuerry

const a = $('ul.li')

console.log(a)