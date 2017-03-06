const express = require ('express');
const app = express();
var bodyParser  = require('body-parser');
const jwt = require('jwt-simple');
var passport	= require('passport');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
let config = require('./config/database'); // get db config file
let User = require('./app/models/user'); // get the mongoose model
let port = process.env.PORT || 8080;

// get our request parameters
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
 
// log to console
app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());
 
// demo Route (GET http://localhost:8080)
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});
 
// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);

