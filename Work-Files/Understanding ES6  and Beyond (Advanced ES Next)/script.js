//! Templates   ``
// var hello = "Ali"
// const nom = "Ali"
// let last = `Hello Tony ${hello}${nom}`
// console.log(last)

//! class

// it give us the way to create objects
// class is actually a funtion object 

class Person {
    //* public 
    firstName;
    lastName;

    //* even we don't create a constructor funtion it will exist as an empty function 
    constructor( firstName, lastName){

       //* here if in public if forget to define doesn't matter 
      //*  it will create firstName key  but batter practice is to create
     //*  public seprately
        this.firstName = firstName 
        this.lastName = lastName
    }

    // here we can create functions inside an object
    //* remeber this thing. here if we create function it will not create in object
    //* it will create in the proto so we can save the space in the memory 

    greet(color){
        return `our color is : ${color}`
    }
}


const nameController = new Person("Shahzaib", "Mirza")

console.log(nameController)
console.log(nameController.__proto__) // in the proto greet funtion is stored
console.log(nameController.greet('blue')) // it will check in the object but the value in proto so it go to down and use proto 