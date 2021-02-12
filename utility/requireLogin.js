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
    const {bearer} = req.body;
    //req body/json => "bearer":"lfsjiejfoljoljffw"
    if(!bearer){
        return res.status(401).json({error:"you must be logged in"})
    }
    jwt.verify(bearer, process.env.jwt_secret, (error, payload) =>{
        if(error){
            return res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        User.findById(_id).then(userData => {
            req.user = userData
            next()
        })
    })
}

module.exports = requireLogin