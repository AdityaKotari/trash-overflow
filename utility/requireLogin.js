/*
Middleware:
requireLogin - checks if bearer token for a logged-in user is valid
*/
var express = require('express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


var mongoose = require('mongoose');
var db = require('./db.js');
var User = require("../models/user");


//middleware for protected get requests, verfies bearer token in request
const requireLogin = (req, res, next) => {
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
        console.log("No auth bearer"); 
       return res.status(401).json({error:"You must be logged in to access this"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.jwt_secret,(err,payload)=>{
        if(err){
         return  res.status(401).json({error:"You must be logged in to access this"})
        }

        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })
        
        
    })




    // const {authorization} = req.headers; 
    // //req body/json => "bearer":"lfsjiejfoljoljffw"
    // if(!bearer){
    //     return res.status(401).json({error:"you must be logged in"})
    // }
    // jwt.verify(bearer, process.env.jwt_secret, (error, payload) =>{
    //     if(error){
    //         return res.status(401).json({error:"you must be logged in"})
    //     }

    //     const {_id} = payload
    //     User.findById(_id).then(userData => {
    //         req.user = userData
    //         next()
    //     })
    // })
}

module.exports = requireLogin