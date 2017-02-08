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


// After this line runs, we are connected to MySQL!
connection.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Express' });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Express' });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', { title: 'Express' });
});

router.get('/page5', function(req, res, next) {
  res.render('page5', { title: 'Express' });
});

router.get('/page6', function(req, res, next) {
  res.render('page6', { title: 'Express' });
});

router.get('/page7', function(req, res, next) {
  res.render('page7', { title: 'Express' });
});

router.get('/page8', function(req, res, next) {
  res.render('page8', { title: 'Express' });
});

router.get('/page9', function(req, res, next) {
  res.render('page9', { title: 'Express' });
});

router.get('/page10', function(req, res, next) {
  res.render('page10', { title: 'Express' });
});



module.exports = router;
