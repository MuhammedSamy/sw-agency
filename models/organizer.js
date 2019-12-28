const mongoose = require('mongoose');

const organizerScehma = new mongoose.Schema({
    user:{
        type:objectId,
        ref:'User'
    },
    workIn:{
        type:objectId,
        ref:'Agency'
    },
    trip:{
        type:objectId,
        ref:'Trip',
    }       
})

const Organizer = mongoose.model('Organizer', organizerSchema);


module.exports.Organizer = Organizer;