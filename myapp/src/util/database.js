const express = require('express')
const cors = require('cors')

const expApp = express()

expApp.use(cors())

expApp.get('/', function(req, res){
    console.log('here')
    res.json(null)
})

expApp.post('/add', function(req, res){
    console.log('here')
    res.json(null)
})

expApp.listen(5000)