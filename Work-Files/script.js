
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



function greet(){
    console.log('hi')
}

greet.filename = 'hello'

console.log(greet())// will return whole function 
console.log(greet().filename) // hello that was not in whole function 
