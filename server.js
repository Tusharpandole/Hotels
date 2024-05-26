// // console.log("Server file is running")

// // function add(a,b){
// //     return a + b;
// // }

// // var result = add(5 , 5) ;
// // console.log(result)

// function callback(){
//     console.log("Adding is successfully completed") ;
// }

// const add = function(a,b, callback){
//     var result = a+b ;
//     console.log('result : ' + result)
//     callback()
// }

// add(5,7,callback) 

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log('user : ' + user)

// fs.appendFile('gretting.txt' , 'Hi Tushar ' + '!\n', ()=>{
//     console.log('file is created');
// })

// const notes = require('./node.js')
// var _ = require('loadash');

// var age = notes.age;
// console.log(age)
// var result = notes.addnumber(5,7);
// console.log(result)
// console.log("Server is avaliable")

// const jsonString = '{"name" : "john" , "age" : 30 ,"city" : "New York"}' ;
// const jsonObject =  JSON.parse(jsonString); // converting the json string to object 
// console.log(jsonObject.name) 


// const objectToConvert = {name : "Alice" , age : 25};
// const jsonStringified = JSON.stringify(objectToConvert); //convert object to JSON string 
// console.log(jsonStringified) ;

const express = require('express')
const app = express() //naksha  
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body 



app.get('/', function (req, res) {
  res.send('Welcome to my hotel how i can help you ')
})

// app.get('/chicken' , (req , res) => {
//     res.send('Sure sir i would love to serve chicken')
// })
// app.get have two parameters one is endpoint if the client write '/' after the address he will get the data 
// app.post('/itmes', (req , res) => {
//   res.send('data is saved')
// })


const personRoutes = require('./routes/personRoutes');

app.use('/person' ,personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);
 
app.listen(3000 , ()=>{
    console.log('listening on port 3000')
})

//this is for the second git commit checking 