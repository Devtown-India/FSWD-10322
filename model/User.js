const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        default:10,
    },
    mobile:{
        type:Number,
        required:true,
        maxlength:10,
    },
    address:[{
        firstLine:{
            type: String,
            maxlength: 100,
            minlength: 5,
        },
        secondLine:{
            type: String,
        },
        city:{
            type:String,
        },
        state:{
            type:String,
        },
        pincode:{
            type:Number,
        },
        landmark:{
            type:String
        }
    }],
    isVerified:Boolean,
},{
    timestamps:true,
})

/*
 firstLine
 secondLine
 city
 pincode
 landmark
*/