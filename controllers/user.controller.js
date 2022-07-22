const { User } = require('../models/index')
const bcrypt = require('bcrypt');
const path = require('path');
const {generateToken} =  require('../midlleware/authentication')

const signUp = async (req,res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const password = bcrypt.hashSync(body.password, 10);

   await User.findOne({
        where: {
            name: name
        }
    }).then(data => {
        if(data === null){
            User.create({
                name: name,
                email: email,
                password: password,
                role_id: 1
            }).then(data => {
                res.status(200).json({
                    status: "success",
                    message: "sukses menambahkan user"
                })
            })
        }else{
            res.status(400).json({
                status: "fail",
                message: "user already exist"
            })
        }
    }).catch(e => {
        res.status(400).json({
            status: 'fail'
        })
    })
}

const login = async (req,res) => {
    const {email,password} = req.body;

    await User.findOne({
        where: {
            email: email
        }
    }).then(data => {
        const passwordValid = bcrypt.compareSync(password, data.password);

        if(!passwordValid) {                        
            return res.status(401).send({
                message: "Email and Password is not match"
            });
        }

        let dataUser = {
            id: data.id,
            name: data.name,
            role: data.role_id
        }

        let token = generateToken(dataUser)
        console.log(token);

        return res.status(200).json({
            status: "success",
            message: "user berhasil login",
            token: token
        })
    })
}

const addDetail = async (req,res) => {
    const id = req.params.id;
    const address = req.body.address;
    const photoUrl = req.file.filename;
    await User.update({
        address: address,
        photoUrl: `http://localhost:3000/user/sendPhoto/${photoUrl}`
    },{
        where: {
            id: id
        }
    }).then(data => {
        res.status(200).json({
            status: "success",
            message: "berhasil mengupdate user"
        })
    }).catch(e => {
        res.status(400).json({
            status: "fail"
        })
    })
}

const sendPhoto = async (req,res) => {
    const {filename} = req.params;
    const dirname = path.resolve();
    const fullfilepath = path.join(dirname , 'uploads/' + filename);
    console.log(fullfilepath)
    return res.sendFile(fullfilepath)
}

const a = async (req,res) => {
    
}


module.exports = {
    signUp,
    login,
    addDetail,
    sendPhoto
}