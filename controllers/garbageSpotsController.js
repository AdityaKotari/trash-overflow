/*
includes:
/newGarbage - makes new garbage spot, requires fields as shown below along with bearer token
/allGarbage - returns all the garbage spots
*/
const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const requireLogin = require('../utility/requireLogin.js')

const mongoose = require('mongoose')
const db = require('../utility/db.js')
const User = require('../models/user')
const Garbage = require('../models/garbage')


module.exports.newGarbage_post = (req, res) => {
  const {lng, lat, reward, description, title,  photoURL, address } = req.body
  if(!lng||!lat || !reward || !description || !title || !photoURL || !address){
    return res.status(422).json({error:"Null fields are not allowed"})
  }
  const garbage = new Garbage({
    lat,
    lng,
    title, 
    postedBy: req.user,
    address, 
    reward: reward,
    photo: photoURL||"", 
    description, 
  })
  garbage.save()
    .then(() => {
      res.json({message:"Saved successfully"})
    })
    .catch((error) => {
      console.log(error);
    });

}


module.exports.allGarbage_get =  async (req, res) => {
  try 
  {
    const garbageArray = await Garbage.find({}).populate("postedBy"); 
    console.log(garbageArray)
    res.json(garbageArray)


  }
  catch (e)
  {
         res.status(422).send(e)
  }


 
  // Garbage.find({}).lean().exec( (error, garbageSpots) => {
  //   if(!error){
  //       return res.json(garbageSpots)
  //   }
  //   else{
  //       res.status(422).send(error)
  //   }
    
  // })
}
//
// router.post('/newGarbage', requireLogin, (req, res) => {
//   const {lng, lat, reward, description, title,  photoURL, address } = req.body
//   if(!lng||!lat || !reward || !description || !title || !photoURL || !address){
//     return res.status(422).json({error:"Null fields are not allowed"})
//   }
//   const garbage = new Garbage({
//     lat,
//     lng,
//     title, 
//     postedBy: req.user,
//     address, 
//     reward: reward,
//     photo: photoURL||"", 
//     description, 
//   })
//   garbage.save()
//     .then(() => {
//       res.json({message:"Saved successfully"})
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// })

// //returns all the garbage spots in the database. 
// router.get('/allGarbage', (req, res) => {
//   Garbage.find({}).lean().exec( (error, garbageSpots) => {
//     if(!error){
//         return res.json(garbageSpots)
//     }
//     else{
//         res.status(422).send(error)
//     }
    
//   })
// })

// module.exports = router;