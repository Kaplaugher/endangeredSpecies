var express = require('express');
var router = express.Router();
// Import config.js from the config directory. It holds our SQL creds
var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : config.host,
  user     : config.username,
  password : config.password,
  database : config.database
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
