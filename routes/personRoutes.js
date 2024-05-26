const express = require('express')
const router = express.Router();

const person = require('./../models/person');

router.post('/', async(req, res) => {
   
    const data = req.body /// Assume the request body contains the person ddata 
     
    //create a new person document using the Mingoose model 
    // const newPerson = new person(data);
    // newPerson.save((error , savedPerson) => {
    //   if(error){
    //     console.log('Error saving person' ,error);
    //     res.status(500).json({error:'Internal server error'})
    //   }
    //   else{
    //      console.log('data saved successfully');
    //      res.status(200).json(savedPerson);
    //   }
    // })
     try{
      const data = req.body  //assume the request body contains the person data 
  
      //create a new person documnet using the mongoose model 
      const newPerson = new person(data);
  
      //save the new person to the database 
      const savedPerson =  await newPerson.save();
      console.log('data saved');
      res.status(200).json(savedPerson); ;
  
     }
     catch(err){
        console.log(err) ;
        res.status(500).json({error:'Internal Server Error'});
     }
  })
  

router.get('/' ,async(req, res)=>{
    try{
       const data =await person.find()
       console.log('data fatched');
     res.status(200).json(data); ;
 ;   }
    catch(err){
     console.log(err) ;
     res.status(500).json({error:'Internal Server Error'});
    }
 })


router.get('/:workType', async (req, res) => {
    try {
      const workType = req.params.workType;
      if (['chef', 'manager', 'waiter'].includes(workType)) {
        const response = await person.find({ work: workType });
        console.log('Response fetched');
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: 'Invalid work type' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.put('/:id' , async(req, res) => {
  try{
   const personId = req.params.id;
   const updatedPersonData = req.body;

   const response = await person.findByIdAndUpdate(personId, updatedPersonData ,{
       new :true ,//return the updated document
       runValidators : true ,//run mongoose validation
   })

   if(!response) {
     return res.status(404).json({ error: 'person not found' });
   }
   console.log('data updated');
   res.status(200).json(response);
  }
  catch (err) {
     console.log(err);
     res.status(500).json({ error: 'Internal server error'});
  }
})

router.delete('/:id' , async(req , res) => {
  try {
    const personId = req.params.id;
    const response = await person.findByIdAndDelete(personId);

    if(!response) {
      return res.status(404).json({ error: 'person not found' });
    }
    console.log('data deleted');
   res.status(200).json({message : 'Person deleted successfully'});
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error'});
  }
})


module.exports = router ;