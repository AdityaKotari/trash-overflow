
const mongoose = require('mongoose');

const garbageSchema = new Schema({
    //latitude and longitude
    lat:{
        type: Number,
        required: true
    },
    lng:{
        type: Number,
        required: true
    },

    //Garbage identifier user details 
    identifier_profile: String,
    reward: Number,
    date: { 
        type: Date, 
        default: Date.now 
    },
    //have to store images somehow
});


mongoose.model("User", garbageSchema);