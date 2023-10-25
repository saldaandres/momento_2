const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = Schema({
    plate: String,
    brand: String,
    available: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Car', carSchema)
