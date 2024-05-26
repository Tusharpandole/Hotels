const express = require('express')
const router = express.Router();

const menuItem = require('./../models/menuItem');


router.post('/' ,async(req, res)=>{
   
    try{
       const data = req.body;
       //const newPerson = new person(data);
       const newMenuItem = new menuItem (data);
       // const savedPerson =  await newPerson.save();
       // console.log('data saved');
       // res.status(200).json(savedPerson); ;
       const savedMenuItem = await newMenuItem.save();
       console.log('Menu data saved');
       res.status(200).json(savedMenuItem)
    }
    catch(err){
       console.log('Error saving menu item', err);
       res.status(500).json({ error: 'Internal Server Error' });
    }
 })
 
router.get('/', async (req, res) => {
    try{
       const data =await menuItem .find()
       console.log('data fatched');
     res.status(200).json(data); ;
    }
    catch(err){
       console.log(err) ;
     res.status(500).json({error:'Internal Server Error'});
    }
 })

//  router.get('/:workType', async (req, res) => {
//     try {
//       const workType = req.params.workType;
//       if (['chef', 'manager', 'waiter'].includes(workType)) {
//         const response = await person.find({ work: workType });
//         console.log('Response fetched');
//         res.status(200).json(response);
//       } else {
//         res.status(404).json({ error: 'Invalid work type' });
//       }
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });

router.get('/:taste', async (req, res) => {
    try{
      const taste = req.params.taste;
      if(['sweet','spicy','sour'].includes(taste)){
        const response = await menuItem.find({
            taste:taste
        });
       console.log('response fatched');
       res.status(200).json(response);
    }
    else {
        res.status(404).json({error: 'Invalid tatse type'});
    }
}
    catch(err){
        console.log(err);
     res.status(500).json({ error: 'Internal server error' });
    }
})
 module.exports = router ;