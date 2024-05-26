var a = 5 ;
var b = 6 ;
var ans = a+b ;
console.log(ans);

//creating an object in the javascript 

const person = {
    name : "John Deo",
    age : 30 ,
    isStudent : false ,
    hobbies : ["reading" , "swimming" , "painting"]
};

console.log(person) ;
console.log(person.name) 

// const age = [32 , 33 , 16 , 40] ;
// const result = age.filter(checkAge) ;

// function checkAge(age) {
//    return age >= 18 
// }

// console.log(result) ;
var prompt = require('prompt-sync')();
const age = prompt("Please enter a valid age") ;
if(age<18){
    console.log("You can't drive you are below 18") ;
}
else console.log("You can drive ");
