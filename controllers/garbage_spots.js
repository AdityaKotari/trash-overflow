/*
includes:
/newGarbage - makes new garbage spot, requires fields as shown below along with bearer token
/allGarbage - returns all the garbage spots
*/
var express = require('express')
var router = express.Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const requireLogin = require('../utility/requireLogin.js')

var mongoose = require('mongoose')
var db = require('../utility/db.js')
var User = require('../models/user')
var Garbage = require('../models/garbage')

//
router.post('/newGarbage', requireLogin, (req, res) => {
  const {lng, lat, price, description, photoURL} = req.body
  if(!lng||!lat||!bearer){
    return res.status(422).json({error:"some arguments are missing for a new garbage post"})
  }
  const garbage = new Garbage({
    lat,
    lng,
    postedBy: req.user,
    reward: price,
    photo: photoURL||""
  })
  garbage.save()
    .then(() => {
      res.json({message:"Saved successfully"})
    })
    .catch((error) => {
      console.log(error);
    });

})

//returns all the garbage spots in the database. 
router.get('/allGarbage', (req, res) => {
  Garbage.find({}).lean().exec( (error, garbageSpots) => {
    if(!error){
        return res.json(garbageSpots)
    }
    else{
        res.status(422).send(error)
    }
    
  })
})

module.exports = router;