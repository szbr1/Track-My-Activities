// const greet = require("./greet")
// console.log(greet.english("Hola"))

//* let's try to run protected hello 

const greet = require("./greet")

greet.greet() // output will be Welcom to The Harward and there is no way from here to change the value

greet.hello = "yellow"
greet.greet() // nothing change the yellow have no effect it can't change the value from here