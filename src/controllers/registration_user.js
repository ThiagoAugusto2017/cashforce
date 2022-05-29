const {
    Op
} = require('sequelize')
const user = require('../models/user')
const order = require('../models/order')
const cnpj = require('../models/cnpj')
const buyer = require('../models/buyer')
const provider = require('../models/provider')

module.exports = class registration_controller {
    ///form/details
    static async registration_views(req, res) {

        const search = req.query["search"]
        console.log(search)

        try {
            const data = await user.findOne({
                raw: true,
                where: {
                    name: {
                        [Op.like]: `%${search}%`
                    }
                },
                attributes: ['name', 'email', 'phoneNumber', 'mobile', 'departament', 'emailChecked', 'cashforceAdm']
            })

            return res.status(200).json({
                data
            })

        } catch (error) {
            res.status(500).json({
                error: "erro rota views "
            })
        }
    };
    ///form/
    static async registration_form(req, res) {

        const {
            name,
            email,
            phoneNumber,
            mobile,
            verificationCode,
            departament,
            emailChecked,
            cashforceAdm
        } = req.body

        try {
            const data = await user.create({
                name,
                email,
                phoneNumber,
                mobile,
                departament,
                verificationCode,
                emailChecked,
                cashforceAdm
            })

            return res.status(200).json({
                sucess: "Cadastrado"
            })

        } catch (error) {
            res.status(500).json({
                error: "erro rota cadastro "
            })
        }
    };


}