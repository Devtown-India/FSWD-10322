const mongoose = require('mongoose')

const StudentSchems = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:Number,
    mobile:Number,
    address:[{
        type: String,
        required:true,
    }],
    isVerified:Boolean,
})