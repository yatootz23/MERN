const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get All Workout'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Get Workout'})
})

router.post('/', (req, res) => {
    res.json({mssg: 'Create Workout'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update Workout'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete Workout'})
})

module.exports =  router