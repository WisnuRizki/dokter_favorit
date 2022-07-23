const express = require('express')
const router = express.Router()

const {
    allCategory,
    
} = require('../controllers/category.controller')

//router.post('/',upload.single('image'),coba);
router.get('/',allCategory)



module.exports = router ;