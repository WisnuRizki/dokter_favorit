const express = require('express')
const router = express.Router()
const multer = require('multer');
const {
    coba
} = require('../controllers/user.controller')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

router.post('/',upload.single('image'),coba);



module.exports = router ;