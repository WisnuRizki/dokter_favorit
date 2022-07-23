const express = require('express')
const router = express.Router()

const {
    addAppointment,
    getHistoryById
} = require('../controllers/appointment.controller')

//router.post('/',upload.single('image'),coba);
router.post('/',addAppointment)
router.get('/:id',getHistoryById)



module.exports = router ;