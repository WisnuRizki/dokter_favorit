const { Appointment,Dokter,Category,Payment,sequelize } = require('../models/index')

const addAppointment = async (req,res) => {
    const {
        user_id,
        dokter_id,
        symptoms
    } = req.body;
    console.log(req.body);

    try {

        const result = await sequelize.transaction(async (t) => {
        
            const createAppoinment = await Appointment.create({
               user_id: user_id,
               dokter_id: dokter_id,
               symptoms: symptoms
            }, { transaction: t })
            
            const findDokter = await Dokter.findOne({
                where: {
                    id: dokter_id
                }
            }, { transaction: t })

            const createPayment = await Payment.create({
                appointment_id: createAppoinment.id,
                grandTotal: findDokter.price * 0.11,
                isPaid: false
            })

            return res.status(200).json({
                status: 'success',
                data: createAppoinment
            })
        });
      
      } catch (error) {
        return res.status(400).json({
            status: 'Gagal',
            message: 'Gagal menambahkan User'
        })
      }
}

const getHistoryById = async (req,res) => {
    const {id} = req.params;
    Appointment.findAll({
        where: {
            user_id: id
        },
        attributes: [
            [sequelize.literal(`"dokter"."name"`), "NameDokter"],
            [sequelize.literal(`"dokter->category"."category"`), "Category"],
            [sequelize.literal(`"payment"."grandTotal"`), "Total"],
            [sequelize.literal(`"payment"."isPaid"`), "Status"],
        ],
        subQuery: false,
        include: [
            {
                model: Dokter,
                as: 'dokter',
                attributes: [],
                include: {
                    model: Category,
                    as: 'category',
                    attributes: []
                }
            },{
                model: Payment,
                as: 'payment',
                attributes: []
            }
        ]
    }).then(data => {
        res.status(200).json({
            status: "success",
            data: data
        })
    }).catch(e => {
        res.status(400).json({
            status: "fail"
        })
    })
}

module.exports = {
    addAppointment,
    getHistoryById
}