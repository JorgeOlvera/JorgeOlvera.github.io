const express = require('express')

const router = express.Router()

router.get('/', function(req, res){
    res.send({
        greeting: 'Hola mundo'
    })
})

router.get('/login', function(req, res){
    res.send({
        greeting: 'Hola mundo'
    })
})


module.exports = router