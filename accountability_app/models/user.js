/*
A brief description of Schema:
- username : string & unique &required
- password : string & required
- goals : multiple values & string & optional
- description : string & optional
- time zone : string & required (ex. IST, PST etc.)
- email : string & unique &required
*/
const mongoose = require("mongoose");
const FORTESTING = false;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: FORTESTING
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    goals: {
        type: Array,
        required: false
    },
    time_zone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    likedProfiles: {
        type: Array,
        required: true
    }
});

const User = mongoose.model('user', userSchema);
// var fluffy = new User({username:'user2', password: 'pass2', description:'boii2', time_zone:'time2', email:'b@c.com'});

// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     console.log('saved! ', fluffy);
//   });

module.exports = User;
