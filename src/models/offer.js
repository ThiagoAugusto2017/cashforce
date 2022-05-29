const {
    Model,
    Sequelize,
    DataTypes
} = require("sequelize")


const user = require('./user')
const order = require('./order')
const cnpj = require('./cnpj')
const buyer = require('./buyer')
const provider = require('./provider')

class offer extends Model {
    static init(sequelize) {
        super.init({
            // const offer = db.define('offers', {

            tax: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            tariff: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            adValorem: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            float: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            iof: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            expiresIn: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            paymentStatusSponsor: {
                type: DataTypes.TINYINT(1),
                validate: {
                    allowNull: false
                }
            },
            paymentStatusProvider: {
                type: DataTypes.TINYINT(1),
                validate: {
                    allowNull: false
                }
            },
            orderId: {
                type: DataTypes.INTEGER(11),
                validate: {
                    allowNull: false
                }
            },
            sponsorId: {
                type: DataTypes.INTEGER(11),
                validate: {
                    allowNull: false
                }
            }

        }, {

            sequelize

        })
    }

}

module.exports = offer