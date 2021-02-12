// Routes for garbage spot data, clean up requests, etc. 

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Garbage home page');
});

module.exports = router;

