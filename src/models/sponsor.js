const {
    Model,
    Sequelize,
    DataTypes
} = require("sequelize")



const order = require('./order')
const cnpj = require('./cnpj')
const buyer = require('./buyer')
const provider = require('./provider')


class sponsor extends Model {
    static init(sequelize) {
        super.init({

            name: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            tradingName: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            cashforceTax: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            responsibleName: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            responsibleEmail: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            responsiblePosition: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            responsiblePhone: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            responsibleMobile: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            website: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            postalCode: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            number: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            complement: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            neighborhood: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            city: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            state: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            bank: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            bankAgency: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            account: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            phoneNumber: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            situation: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            situationDate: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            cnpjId: {
                type: DataTypes.INTEGER,
                validate: {
                    defaultValue: null
                }
            }

        }, {

            sequelize

        })
    }
    static associate(models) {
        this.belongsTo(models.sponsor, {
            foreignKey: 'cnpjId',
            as: 'sponsorCnpj'
        });
    }
}


module.exports = sponsor