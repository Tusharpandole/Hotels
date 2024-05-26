// the de.js file is created for essential reponsible for establishing the conection between the nod.js application and your mongoDB database using the mongoes liberary
const mongoose = require('mongoose');

//define the mongoDB connection URL 
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL  = process.env.MONGODB_URL

//set up mongoDB connection
// mongoose.connect(mongoURL,{
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// })

mongoose.connect(mongoURL, {
    // These options are now deprecated and removed from recent Mongoose versions
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB server');
  }).catch((err) => {
    console.error('MongoDB connection error: ' + err);
  });

//get the default connection 
//Mongoose maintain a default connection object representing the MongoDB connection .

const db = mongoose.connection

// define the event listeners
db.on('connection' , ()=>{
  console.log('connected to MonngoDB server');
})

db.on('error', (err)=>{
    console.log('MongoDB connection error: ' + err)
})
db.on('disconnect', ()=>{
    console.log('MongoDB connection disconnect')
})

//Export the database connection 
module.exports =db ;