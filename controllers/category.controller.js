const { Category } = require('../models/index')

const allCategory = async (req,res) => {
    Category.findAll({
        attributes: [
            'id',
            'category'
        ]
    }).then(data => {
        res.status(200).json({
            status: "success",
            data: data
        })
    }).catch(e => {
        res.status(200).json({
            status: "fail"
        })
    })
}



module.exports = {
    allCategory
}