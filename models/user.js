const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    photo:{
        type: String,
        default: ""
    },
    password:{
        type:String,
        required:true
    },
    spotsCleaned:{
        type:Number,
        default:0
    },
    phone:{
        type: Number,
        required: true
    },
    paymentRecieved:{
        type:Number,
        default:0
    },
    TopPosition:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model("User", userSchema, 'users')