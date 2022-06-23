const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    }
},{
    timestamps:true,
})

UserSchema.pre('save',(next)=>{
    const {password} = this
    // hash the password here
    this.password = bcrypt.hashSync(password,10)
    console.log(this)
    next()
})

const User = mongoose.model('User',UserSchema)

module.exports = User