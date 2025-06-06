
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


function factory(ln){
    return function(firstname, lastname){
       if(ln === "en"){
         console.log(`How may i can help you ${firstname} ${lastname}`)
        }
        if(ln === "ur"){
           console.log(`G btaiya ${firstname} ${lastname} hum apki kis trah madad kr saktya hain ` )

       }
    }
}

const langA = factory("en")
const langB = factory("ur")

langA("shahzaib", "Mirza")
langB("ALiza", "Mam")