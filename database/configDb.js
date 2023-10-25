const  mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect('mongodb://127.0.0.1:27017/dbRentCar').then(db => console.log('Base de datos conectada')).catch(err => console.log(err))
}

module.exports = connectToDB
