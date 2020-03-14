const express = require('express')
const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
    console.log('get/',req.hello)
    res.send('Hello /api!')
})
//เรียกใช้ /api/student/list
router.get('/list', (req, res) => {
    console.log('get/',req.hello)
    res.send('Student /api!')
})