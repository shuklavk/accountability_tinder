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
    goals: {
        type: Array,
        required: false
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

mongoose.model("User", userSchema);