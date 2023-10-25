const express = require('express')
const Rent = require('../models/rent')
const User = require('../models/user')
const Car = require('../models/car')
const router = express.Router()

let error = false
let message = ''
let mostrarLista = false

router.get('/', async (req, res) => {
    const rents = await Rent.find()
    res.render('rent', {error, message, mostrarLista, rents})
})

router.post('/', async (req, res) => {
    let {rentNumber, userName, plate} = req.body

    if (rentNumber === '' || userName === '' || plate === '') {
        error = true
        message = 'Rellena todos los campos'
        res.redirect('/rent')
        return
    }

    renta = await  Rent.findOne({rentNumber: rentNumber})

    if (renta) {
        error = true
        message = 'No puedes repetir numero de renta'
        res.redirect('/rent')
        return
    }

    carro = await Car.findOne({plate: plate})

    if (!carro) {
        error = true
        message = 'Este auto no existe'
        res.redirect('/rent')
        return
    }

    if (carro.available === false) {
        error = true
        message = 'Este auto no está disponible'
        res.redirect('/rent')
        return
    }

    usuario = await User.findOne({userName: userName})

    if (!usuario) {
        error = true
        message = 'Este usuario no existe'
        res.redirect('/rent')
        return
    }

    const newRent =new Rent(req.body)
    newRent.save()
    error = false
    message = 'Renta agregada con exito'
    carro.available = false
    carro.save()
    res.redirect('rent')
})

router.get('/listar', async (req, res) => {
    mostrarLista = !mostrarLista
    res.redirect('/rent')
})

module.exports = router
