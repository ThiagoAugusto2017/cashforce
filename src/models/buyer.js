const {
    Model,
    DataTypes
} = require("sequelize")


class buyer extends Model {
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
            address: {
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
            cnpjId: {
                type: DataTypes.INTEGER(11),
                validate: {
                    defaultValue: null
                }
            },
            confirm: {
                type: DataTypes.TINYINT(1),
                validate: {
                    defaultValue: 1
                }
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            }
        }, {

            sequelize

        })
    }
    static associate(models) {
        this.belongsTo(models.cnpj, {
            foreignKey: 'cnpjId',
            as: 'buyerCnpj'
        });
        this.hasOne(models.order, {
            foreignKey: 'buyerId',
            as: 'buyeruser'
        });

    }
}
module.exports = buyer