const express = require ('express');
const app = express();
var bodyParser  = require('body-parser');
const jwt = require('jwt-simple');
let passport	= require('passport');
let morgan = require('morgan');
//let mongoose = require('mongoose');
// let config = require('./config/database'); // get db config file
// let User = require('./app/models/user'); // get the mongoose model
let port = process.env.PORT || 8080;
const fs = require('fs');

// get our request parameters
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


// log to console
app.use(morgan('dev'));
 
// Starte passport package
app.use(passport.initialize());
 
// Standard Route nur mit Willkommenstext
app.get('/', function(req, res) {
  res.send('API running at http://localhost:' + port + '/api');
});
 
// Start des Servers
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);

