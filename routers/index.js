const express = require("express");
const router = express.Router();

const user = require('./user.route')
const category = require('./category.route')
const appointment = require('./appointment.route')

router.use('/user', user);
router.use('/category', category);
router.use('/appointment', appointment);
module.exports = router;