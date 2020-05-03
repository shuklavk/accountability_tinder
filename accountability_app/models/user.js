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

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    time_zone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});


const User = mongoose.model("user", userSchema);

var fluffy = new User({username:'user1', password: 'pass1', description:'boii', time_zone:'time1', email:'a@b.com'});

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('saved! ', fluffy);
  });