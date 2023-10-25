const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    userName: String,
    name: String,
    password: String
})

module.exports = mongoose.model('User', userSchema)
