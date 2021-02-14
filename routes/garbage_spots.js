const express = require('express')
const router = express.Router()


const jwt = require('jsonwebtoken')
const requireLogin = require('../utility/requireLogin.js')


const User = require('../models/user')
const Garbage = require('../models/garbage')

const garbageController = require("../controllers/garbageSpotsController")

router.post('/newGarbage', requireLogin, garbageController.newGarbage_post)
router.get('/allGarbage',garbageController.allGarbage_get)



module.exports = router