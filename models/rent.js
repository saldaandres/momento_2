const mongoose = require('mongoose')
const {Schema} = mongoose;

const rentSchema = new Schema({
    rentNumber: Number,
    userName: String,
    plate: String,
    rentDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Rent', rentSchema)
