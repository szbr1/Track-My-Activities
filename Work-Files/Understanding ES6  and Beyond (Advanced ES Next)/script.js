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

// class Fridge{ 
//     //* by doing this now we can make the feilds private no one can access
//     #item
//     #drink

//     constructor(drink,item){
//         this.#drink = drink
//         this.#item = item
//     }
    
//     //* by doing this everyone can access but can't mutate
    
//     get supply(){
//       return this.#drink+ " "+ this.#item
//     }

//     // with this i can set fields as well
//     set limit(val){
//             this.#drink = val
//     }

// }

// const kitchen = new Fridge('Fizz', 'Sabun')
// //* in this way we can set the setter value of field
// kitchen.limit = 'BlueBarry'

// console.log(kitchen.supply)



//! class => we can also private the methods 

// class Fridge{ 
//     item
//     drink

//     constructor(drink,item){
//         this.drink = drink
//         this.item = item
//     }
//   //* by adding # before funtion we can make it private 
//     #getValue (na){
//      return na 
//     }
    
    
   

// }

// const kitchen = new Fridge('Fizz', 'Sabun')
// console.log(kitchen.getValue) // we show undefined 

//  //! fat arrow function ()=> && this 

// const obj = {
//     name: "Jhone",
//     caller: ()=>{    //if we use arrow method directly it refers to window object but if we use function exp it refers obj
//    console.log(this)
//     }
// }


// obj.caller()


// const obj2 = {
//     name: "Jhone",
//     caller: function(){   
//    console.log(this) // here this refers to obj2

//    //* what will happen if we add a function expression here and call this 
//     //  function log(){

//     // const self = this 
//     //     console.log(this) //* here this will call the window object 

//     //  //* to make it refer the obj not window we have to add self 
//     // console.log(self) //* this will refer to the obj not window 
//     //  }
//     //  log()  

//     //* what will happen if we use arrow fc 
//     const log = ()=>{
//         console.log(this) //here it will show the obj 
//     }


//     }
// }


// obj.caller()
// obj2.caller()


// //! Limitations and readiblilty

// let longExpression = x => y => z => z ? y : x;
// let longExpression2 = function(x) {    return function(y) {        return function(z) {            return z ? y : x;        }    }}
// let result1 = longExpression('Tony')('Anthony')(true);let result2 = longExpression('Tony')('Anthony')(false);
// console.log(result1);console.log(result2);


// //! Quiz 
// const dname = Symbol('DogName');
// let dog = {
//   [dname]: 'Fido'
// }

// //* How we call the conole to get dname value 

//! iterator     

const tv = {
  [Symbol.iterator]: ()=>{
    const value = 2 
    const end = 10
    let nextValue = value
      return {
        next: ()=>{
          if(nextValue < end) {
            nextValue++
            return { value: nextValue, done: false}
          }
          return { value: nextValue, done: true}
        }
      }
  }
}
//How javascript does this
for(let iterator of tv){
  console.log(iterator)
}
//How under the hood javascript does this
const iterable = tv[Symbol.iterator]()
const next = iterable.next()
if(!next.done){
  console
}
// let iterable = tv.lcd(2, 10)

// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
// console.log(iterable.next())
