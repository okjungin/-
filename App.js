const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const router = require('./Router')
const routerTL = require('./Router/TraceLog')
const port = 3030

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(['/','/create_web','/userCreateWeb'], router)

app.get('/goback', routerTL)

app.post('/update', routerTL)

app.listen(port, () => { console.log('서버가 ' + port + '번 포트에서 실행중입니다.') })