const user = require('../models/user')
const order = require('../models/order')
const cnpj = require('../models/cnpj')
const buyer = require('../models/buyer')
const provider = require('../models/provider')

module.exports = class detalhamento_controller {
    static async detalhamento_views(req, res) {

        const id = req.query["pxs"]
        console.log(id)

        try {
            const data = await order.findAll({
                raw: true,
                where: {
                    id: id,
                },
                attributes: ['nNf', 'emitedTo', 'value', "orderStatusBuyer", "orderStatusProvider", "deliveryReceipt", "cargoPackingList", "deliveryCtrc"],
                include: {
                    association: 'providerorder',
                    attributes: ['name']
                },
                join: {
                    association: 'buyer',
                    attributes: ['name']
                }
            })
            const sacado_buyers = await buyer.findAll({
                raw: true,
                attributes: ['name']
            })

            return res.status(200).json({
                data,
                sacado_buyers
            })
        } catch (error) {
            res.status(500).json({
                error: "erro rota details "
            })
        }

    };

    static async detalhamento_views_user(req, res, ) {

        const id = req.query["pxs"]
        console.log(id)

        try {
            const data = await order.findOne({
                raw: true,
                attributes: [],
                include: {
                    where: {
                        id: id,
                    },
                    association: 'orderuser',
                    attributes: ['name', 'email', 'phoneNumber', 'mobile', 'departament', 'emailChecked', 'cashforceAdm']
                }

            })

            return res.status(200).json({
                data,
            })
        } catch (error) {
            res.status(500).json({
                error: "erro rota client/:pxs/details "
            })
        }
    };
}