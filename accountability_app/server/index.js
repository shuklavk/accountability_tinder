var express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const schema = require('./schema/schema');
const {MONGOURI} = require('./keys');
const passport = require('./google-auth');
var history = require('connect-history-api-fallback');

// Create User from userSchema
require("../models/user");
const User = mongoose.model("user");
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(MONGOURI);

mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

// /* Demo to add data to MongoDB atlas */
// var demoUserCreds = new User({username:'user5', password: 'pass1', description:'boii', goals: ["do yoga!", "loose weight"], time_zone:'time1', email:'a1a@b.com'});
// demoUserCreds.save(function (err, demoUserCreds) {
//     if (err) return console.error("Failed!", err);
//     console.log('saved! ', demoUserCreds);
//   });

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));
app.use(history());

// GET /auth/google
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), 
  function(req, res) {
    res.redirect('/');
});

app.use(express.static(__dirname + '/../dist'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;