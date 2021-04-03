const jwt = require('jsonwebtoken')
const requireLogin = require('../utility/requireLogin.js')


const User = require('../models/user')
const Garbage = require('../models/garbage')

const profileController = require("../controllers/profileDataController")

router.post('/signup',  profileController.signup_post)
router.post('/login',profileController.login_post)
router.get('/userData', requireLogin, profileController.userData_get)

router.get('/leaderboard',profileController.leaderboard_get) 


module.exports = router