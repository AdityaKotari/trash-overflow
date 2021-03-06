/* 
Includes the following routes:
/signup - makes a new user entry
/login - verifies credentials, returns bearer token
/userData - sends back json-ified user (mongoose) document
*/
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const requireLogin = require('../utility/requireLogin.js')

const mongoose = require('mongoose');
const db = require('../utility/db.js');
const User = require('../models/user');

//adds a new user to db, requires {name, email, password}


module.exports.signup_post = (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!email || !name || !password) {
        return res.status(422).json({ error: "Null fields are not allowed" });
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "A user having this email already exists" });
            }
            bcrypt.hash(password, 12)
                .then((hashedPassword) => {
                    const user = new User({
                        name,
                        email,
                        password:hashedPassword,
                        phone: phone
                    });
                    user.save()
                        .then(() => {
                            res.json({ message: "Successfully registered!" })
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                })
    })
}



module.exports.login_post = (req, res) => {
    const {email, password} = req.body
    if(!email||!password){
        return res.status(422).json({error:"Null fields are not allowed"});
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
                        const {_id,name,email,phone} = savedUser
                        res.json({token, user:{_id,name,email,phone} })
                    }
                    else{
                        return res.status(422).json({error:"Invalid credentials"})
                    }
                })
                .catch( (error) => {
                    console.log(error)
                })
        })

}

module.exports.userData_get = (req, res) => {
    const {authorization} = req.headers
    //req body/json => "bearer":"lfsjiejfoljoljffw"
    const id = jwt.decode(authorization.replace("Bearer ",""))
    User.findById(id).lean().exec( (error, users) => {
        if(!error){
            return res.json(users)
        }
        else{
            res.status(404).send(error)
        }
        
    })
}


module.exports.leaderboard_get = (req, res) => {
    User.find({}).sort({spotsCleaned: -1}).limit(10).exec( (error, leaderboard) => {        
        if(!error){
            return res.json(leaderboard)
        }
        else{
            res.status(422).send(error)
        }
    });
}

// router.post('/signup', (req, res) => {
//     const { name, email, password, phone } = req.body;
//     if (!email || !name || !password) {
//         return res.status(422).json({ error: "Null fields are not allowed" });
//     }

//     User.findOne({ email: email })
//         .then((savedUser) => {
//             if (savedUser) {
//                 return res.status(422).json({ error: "A user having this email already exists" });
//             }
//             bcrypt.hash(password, 12)
//                 .then((hashedPassword) => {
//                     const user = new User({
//                         name,
//                         email,
//                         password:hashedPassword,
//                         phone: phone
//                     });
//                     user.save()
//                         .then(() => {
//                             res.json({ message: "Successfully registered!" })
//                         })
//                         .catch((error) => {
//                             console.log(error);
//                         })
//                 })
//     })
// })

//logs in a user, requires {email, password}
// router.post('/login', (req, res) => {
//     const {email, password} = req.body
//     if(!email||!password){
//         return res.status(422).json({error:"Null fields are not allowed"});
//     }
//     User.findOne({email:email})
//         .then(savedUser => {
//             if(!savedUser){
//                 return res.status(422).json({error:"No accounts exists with this email"})
//             }        
//             bcrypt.compare(password, savedUser.password)
//                 .then( (matches) => {
//                     if(matches){
//                         //res.json({message:"Successfully signed in"})
//                         const token = jwt.sign({_id:savedUser._id}, process.env.jwt_secret)
//                         const {_id,name,email,phone} = savedUser
//                         res.json({token, user:{_id,name,email,phone} })
//                     }
//                     else{
//                         return res.status(422).json({error:"Invalid credentials"})
//                     }
//                 })
//                 .catch( (error) => {
//                     console.log(error)
//                 })
//         })

// })

//gets user data
// router.get('/userData', requireLogin, (req, res) => {
//     const {authorization} = req.headers
//     //req body/json => "bearer":"lfsjiejfoljoljffw"
//     const id = jwt.decode(authorization.replace("Bearer ",""))
//     User.findById(id).lean().exec( (error, users) => {
//         if(!error){
//             return res.json(users)
//         }
//         else{
//             res.status(404).send(error)
//         }
        
//     })
// })

//returns leaderboard of top 10 earners
// router.get('/leaderboard', (req, res) => {
//     User.find({}).sort({spotsCleaned: -1}).limit(10).exec( (error, leaderboard) => {        
//         if(!error){
//             return res.json(leaderboard)
//         }
//         else{
//             res.status(422).send(error)
//         }
//     });
// })

// module.exports = router;