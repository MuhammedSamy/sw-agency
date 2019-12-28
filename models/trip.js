const mongoose = require('mongoose');

const tripScehma = new mongoose.Schema({
    name:String,
    cost:Number,
    stratAt:Date,
    endAt:Date,
    description:String,
    agency:{
        type:objectId,
        ref:'Agency'
    },
    organizer:[{
        type:objectId,
        ref:'Organizer'
    }],
    tourist:[{
        type:objectId,
        ref:'Tourist'
    }],
})

const Trip = mongoose.model('Trip', tripSchema);


module.exports.Trip = Trip;