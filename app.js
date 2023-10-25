const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3200
const app = express()
const morgan = require('morgan')
const connectToDB = require("./database/configDb");

// enrutadores
const user = require('./routes/user')
const car = require('./routes/car')
const rent = require('./routes/rent')

// conectar a la base de datos
connectToDB()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.use(morgan('dev'))

app.use('/user', user)
app.use('/car', car)
app.use('/rent', rent)

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
})
