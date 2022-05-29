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


class orderportion extends Model {
    static init(sequelize) {
        super.init({

            nDup: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            dVenc: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            vDup: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            availableToMarket: {
                type: DataTypes.BOOLEAN,
                validate: {
                    allowNull: false
                }
            },
            orderId: {
                type: DataTypes.INTEGER,
                validate: {
                    allowNull: false
                }
            }

        }, {

            sequelize

        })
    }

}


module.exports = orderportion