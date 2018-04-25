const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validate = require('mongoose-validator')

let emailChecker = [
    validate({
        validator: 'isEmail',
        message: 'Format email has invalid'
    })
]

const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'First Name cannot be empty']
    },
    last_name: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Email cannot be empty'],
        validate: emailChecker 
    },
    password: {
        type: String,
        required: [true, 'Password cannot be empty'],
        minlength: [8, 'Password length minimum 8 character'],
        validate: [/\d/, 'Password MUST HAVE CONTAIN NUMERIC']
    },
    address: {
        type: String,
        required: [true, 'Addrres cannot be empty']
    },
    role: {
        type: String,
        default: 'user'
    },
    gender: {
        type: String,
        required: [true, 'Gender cannot be empty']
    }

}, {
    timestamps: true
})

userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

let User = mongoose.model('User', userSchema)

module.exports = User