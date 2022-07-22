const express = require('express')
const router = express.Router()
const multer = require('multer');
const {
    signUp,
    login,
    addDetail,
    sendPhoto
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

//router.post('/',upload.single('image'),coba);
router.get('/sendPhoto/:filename',sendPhoto)
router.post('/signUp',signUp);
router.post('/login',login);
router.put('/addDetail/:id',upload.single('image'),addDetail)


module.exports = router ;