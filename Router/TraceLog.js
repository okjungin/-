const express = require('express')
const fs = require('fs')
const router = express.Router()

let traceLogData = [];

const userCreateWeb = require('../Create_Web')

router.get('/goback', (req,res) => {
    if(typeof traceLogData[traceLogData.length-2] === 'undefined' 
    || traceLogData.length <= 1) { 
        return res.send('alert')
    }
    fs.writeFileSync(userCreateWeb, traceLogData[traceLogData.length-2])
    res.send(traceLogData[traceLogData.length-2])
    if(traceLogData.length > 1) { 
        traceLogData.pop()
    }
})

router.post('/update', (req, res) => {
    const updatedHTML = req.body.updatedHTML
    const traceLogHTML = req.body.traceLogHTML
    traceLogData.push(...traceLogHTML)
    if(traceLogData.length > 5) { 
        traceLogData.shift()
    }
    fs.writeFileSync(userCreateWeb, JSON.parse(updatedHTML))
    res.send('HTML 파일이 업데이트 되었습니다.')
});

module.exports = router 

