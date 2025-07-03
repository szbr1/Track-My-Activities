// remeber that greet folder run only when the greet.js file is not exist

const hello  = "Welcom to The Harward"
// with this no once can change the value of hello it will be protected
function greet (){
 console.log(hello)

}

// we use object in export bcz we don't want to give the access to change the value of hello to the user
module.exports = {greet: greet}