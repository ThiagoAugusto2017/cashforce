const {
    Model,
    Sequelize,
    DataTypes
} = require("sequelize")



const user = require('./user')
const order = require('./order')
const buyer = require('./buyer')
const provider = require('./provider')


class cnpj extends Model {
    static init(sequelize) {
        super.init({

            cnpj: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            companyType: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            }

        }, {

            sequelize

        })
    }
    static associate(models) {
        this.hasOne(models.buyer, {
            foreignKey: 'cnpjId',
            as: 'buyerCnpj'
        });
        this.hasOne(models.sponsor, {
            foreignKey: 'cnpjId',
            as: 'sponsorCnpj'
        });
        this.hasOne(models.provider, {
            foreignKey: 'cnpjId',
            as: 'providerCnpj'
        });
        this.hasOne(models.order, {
            foreignKey: 'cnpjId',
            as: 'orderCnpj'
        });


    }
}

module.exports = cnpj