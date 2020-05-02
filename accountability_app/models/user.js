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
        required: true,
        unique: FORTESTING
    }
});


mongoose.model('User', userSchema);