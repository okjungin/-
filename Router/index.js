const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/create_web', (req,res) => {
    res.render('create_web')
})

const userCreateWeb = require('../Create_Web')

router.get('/userCreateWeb', (req,res) => {
    res.sendFile(userCreateWeb)
})

module.exports = router;
