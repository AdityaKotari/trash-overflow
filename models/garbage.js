
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const garbageSchema = new mongoose.Schema({
    //latitude and longitude
    lat:{
        type: Number,
        required: true
    },
    lng:{
        type: Number,
        required: true
    },
    title: 
    {
        type:String, 
        required: true
    }, 

    //Garbage identifier user details 
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
    reward:{
        type: Number,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    photo:{
        type: String,
        default:""
    },
    description:{
        type: String,
        default:""
    }
});


module.exports = mongoose.model("Garbage", garbageSchema, 'garbage-spots');