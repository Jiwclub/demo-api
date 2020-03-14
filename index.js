const express = require('express') //ทำงาน express เสร็จก่อนแล้วไป middleware
const app = express()
const port = 5000


app.use((req, res, next) => { // middleware ตัวกลาง หรือทางผ่าน req และ  middleware ต้องทำงานเสร็จก่อนถึงจะไป app.get
    req.hello = 'World'
    // console.log('hello')
    next()
})
// เมื่อ user เข้า http://localhost:5000/api จะไปเรียก api/index.js
app.use('/api', require('./api/index')) // เชื่อมโยง ไฟล์ในโฟล์เดอร์ api 

//GET, POST
// querystring
//http://localhost:5000/student?code=111 รับค่าแบบ get
//PARAMS http://localhost:5000/student/:code
app.get('/student/:code?', (req, res) => { //code? ไม่ใส่ code ก็ได้
    console.log(req.query)
    console.log(req.params) //การเข้าถึงตัวแปร
    // res.send('Hello World!'+ req.query.code)// แสดงรับค่าแบบ get
    res.send('Hello World!'+ req.params.code) // แสดงรับค่าแบบ params

    // res.send({id: 1,name: 'Test'}) // send ทำได้แค่ตัวเดียว
})
app.get('/about', (req, res) => {
    res.send('Hello World! about')
})
app.get('/test', (req, res) => {
    res.send('Hello World! test')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))