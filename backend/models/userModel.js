const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email, username, password){
    const emailExists = await this.findOne({email})

    if (emailExists){
        throw Error('Email already exists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, username, password: hash})

    return user

}

module.exports = mongoose.model('User', userSchema)