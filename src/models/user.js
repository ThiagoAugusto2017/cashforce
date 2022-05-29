const {
    Model,
    Sequelize,
    DataTypes
} = require("sequelize")




const order = require('./order')
const cnpj = require('./cnpj')
const buyer = require('./buyer')
const provider = require('./provider')


class user extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            phoneNumber: {
                type: DataTypes.STRING,

            },
            mobile: {
                type: DataTypes.STRING,

            },
            departament: {
                type: DataTypes.INTEGER,

            },
            verificationCode: {
                type: DataTypes.INTEGER,

            },
            emailChecked: {
                type: DataTypes.BOOLEAN,
                validate: {
                    allowNull: false
                }
            },
            cashforceAdm: {
                type: DataTypes.INTEGER,
                validate: {
                    allowNull: false
                }
            }
        }, {

            sequelize

        })
    }
    static associate(models) {
        this.hasOne(models.order, {
            foreignKey: 'userId',
            as: 'orderuser'
        });
    }
}


module.exports = user;