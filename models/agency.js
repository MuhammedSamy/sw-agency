const mongoose = require('mongoose');

const agencyScehma = new mongoose.Schema({
    user:{
        type:objectId,
        ref:'User'
    },
    trip:[{
        type:objectId,
        ref:'Trips'
    }],      
    organizer:[{
        type:objectId,
        ref:'Organizer'
    }]      
})

const Agency = mongoose.model('Agency', agencySchema);


module.exports.Agency = Agency;