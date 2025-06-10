//! Templates   ``
// var hello = "Ali"
// const nom = "Ali"
// let last = `Hello Tony ${hello}${nom}`
// console.log(last)

//! class

// it give us the way to create objects
// class is actually a funtion object 

// class Person {
//     //* public fields
//     firstName;
//     lastName;

//     //* even we don't create a constructor funtion it will exist as an empty function 
//     constructor( firstName, lastName){

//        //* here if in public if forget to define doesn't matter 
//       //*  it will create firstName key  but batter practice is to create
//      //*  public seprately
//         this.firstName = firstName 
//         this.lastName = lastName
//     }

//     // here we can create functions inside an object
//     //* remeber this thing. here if we create function it will not create in object
//     //* it will create in the proto so we can save the space in the memory 

//     greet(color){
//         return `our color is : ${color}`
//     }
// }


// const nameController = new Person("Shahzaib", "Mirza")

// console.log(nameController)
// console.log(nameController.firstName) // Shahzaib
// console.log(nameController.__proto__) // in the proto greet funtion is stored
// console.log(nameController.greet('blue')) // it will check in the object but the value in proto so it go to down and use proto 

// //! How to extend the class

// class Tony extends Person {
//   //! class => super
//   //* we use super to accesss the constructor of extended object 
//   //Example: 
//   // so what it will do is similar where we use new Person("")
//   // here we don't need to use new bcz we are not creatin object we are accessing the consturctor of parent
//   constructor (){
//     super("Ahmad", "Uzair")
//   }
// }

// const TonyCall = new Tony()

// console.log(TonyCall)// output: Tony {firstName: 'Ahmad', lastName: 'Uzair'}

//! class important (get, set) getters and setters

class Fridge{ 
    //* by doing this now we can make the feilds private no one can access
    #item
    #drink

    constructor(drink,item){
        this.#drink = drink
        this.#item = item
    }
    
    //* by doing this everyone can access but can't mutate
    
    get supply(){
      return this.#drink+ " "+ this.#item
    }

    // with this i can set fields as well
    set limit(val){
            this.#drink = val
    }

}

const kitchen = new Fridge('Fizz', 'Sabun')
kitchen.limit = 'BlueBarry'

console.log(kitchen.supply)