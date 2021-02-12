//Routes for garbage spot data, clean up requests, etc. 

var express = require('express')
var router = express.Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const requireLogin = require('../utility/requireLogin.js')

var mongoose = require('mongoose')
var db = require('../utility/db.js')
var User = require('../models/user')
var Garbage = require('../models/garbage')

router.post('/newGarbage', requireLogin, (req, res) => {
  const {lng, lat, price, bearer, description} = req.body
  if(!lng||!lat||!bearer){
    return res.status(422).json({error:"some arguments are missing for a new garbage post"})
  }
  const garbage = new Garbage({
    lat,
    lng,
    postedBy: req.user,
    reward: price,
  })
  garbage.save()
    .then(() => {
      res.json({message:"Saved successfully"})
    })
    .catch((error) => {
      console.log(error);
    });

})
router.get('/allGarbage', requireLogin, (req, res) => {
  Garbage.find({}).lean().exec( (error, garbageSpots) => {
    if(!error){
        return res.end(JSON.stringify(garbageSpots))
    }
    else{
        res.status(422).send(error)
    }
    
})
})

module.exports = router;

