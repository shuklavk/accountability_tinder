var express = require('express');
const expressGraphQL = require('express-graphql');
var bodyParser = require('body-parser');
const schema = require('./schema/schema');
var app = express();
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
const passport = require('./google-auth');

mongoose.Promise = global.Promise;
mongoose.connect(MONGOURI);

// var db = mongoose.connection;

// db.on('error', (err) => {
//   console.log('Connection to MongoDB failed with the error: ', err);
// });

// db.once('open', () => {
//   console.log('Connection to MongoDB established');
// });

// app.use(express.static(__dirname + '/../react-client/dist'));


// app.listen(3000, function() {
//   console.log('listening on port 3000!');
// });

mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// GET /auth/google
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), 
  function(req, res) {
    res.redirect('/');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;