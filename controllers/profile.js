/* 
Includes the following routes:
/signup - makes a new user entry
/login - verifies credentials, returns bearer token
/userData - sends back json-ified user (mongoose) document

Middleware:
requireLogin - checks if bearer token for a logged-in user is valid


*/
var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


var mongoose = require('mongoose');
var db = require('../utility/db.js');
var User = require("../models/user");

//adds a new user to db, requires {name, email, password}
router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
        res.status(422).json({ error: "Some arguments are missing" });
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "An user already exists with this email" });
            }
            bcrypt.hash(password, 12)
                .then((hashedPassword) => {
                    const user = new User({
                        name,
                        email,
                        password:hashedPassword
                    });
                    user.save()
                        .then(() => {
                            res.json({ message: "Saved successfully" })
                        })
                        .catch((error) => {
                            console.log(error);
                        });


                })


        });
})

//logs in a user, requires {email, password}
router.post('/login', (req, res) => {
    const {email, password} = req.body
    if(!email||!password){
        return res.status(422).json({error:"Email or password is missing"});
    }
    User.findOne({email:email})
        .then(savedUser => {
            if(!savedUser){
                return res.status(422).json({error:"No accounts exists with this email"})
            }        
            bcrypt.compare(password, savedUser.password)
                .then( (matches) => {
                    if(matches){
                        //res.json({message:"Successfully signed in"})
                        const token = jwt.sign({_id:savedUser._id}, process.env.jwt_secret)
                        res.json({token})
                    }
                    else{
                        return res.status(422).json({error:"Invalid password or email"})
                    }
                })
                .catch( (error) => {
                    console.log(error)
                })
        })

})


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
        })
        next()
    })
}

//gets user data
router.get('/userData', requireLogin, (req, res) => {
    const {bearer} = req.body;
    //req body/json => "bearer":"lfsjiejfoljoljffw"
    const id = jwt.decode(bearer)
    User.findById(id).lean().exec(function (error, users) {
        if(!error){
            return res.end(JSON.stringify(users))
        }
        else{
            res.status(404).send(error)
        }
        
    })
})

module.exports = router;