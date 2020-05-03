var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');

mongoose.connect(MONGOURI);

var db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection to MongoDB failed with the error: ', err);
});

db.once('open', () => {
  console.log('Connection to MongoDB established');
});

console.log(__dirname + '/../dist')

// app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../dist'));


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

