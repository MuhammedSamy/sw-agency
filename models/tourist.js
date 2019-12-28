const mongoose = require('mongoose');

const touristScehma = new mongoose.Schema({
    user:{
        type:objectId,
        ref:'User'
    },
    trip:[{
        type:objectId,
        ref:'Trip',
    }]
})

const Tourist = mongoose.model('Tourist', touristSchema);


module.exports.Tourist = Tourist;