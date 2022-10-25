/*

File Name: user.js
Name: Husna Bakhshi
Id: 301194192
Date: 23 October 2022

*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
