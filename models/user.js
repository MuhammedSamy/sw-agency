const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    phone:String,
    type:[tourist, agency, organizer]
})

const User = mongoose.model('User', userSchema);


module.exports.User = User;

