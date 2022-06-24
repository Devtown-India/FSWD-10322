const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
    },
    username:{
        type: String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    todos: [{
        type: mongoose.Types.ObjectId,
        ref:"Note"
    }]

},{timestamps:true})

UserSchema.pre('save', function(next){
    if(this.password.length < 5){
        next(new Error('Password must be at least 5 characters long'))
    }else{
        const salt = bcrypt.genSaltSync(5)
        const hashedPassword = bcrypt.hashSync(this.password, salt)
        this.password = hashedPassword
        next()
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
