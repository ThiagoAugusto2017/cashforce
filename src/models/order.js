const {
    Model,
    Sequelize,
    DataTypes
} = require("sequelize")




const user = require('./user')
const cnpj = require('./cnpj')
const buyer = require('./buyer')
const provider = require('./provider')



class order extends Model {
    static init(sequelize) {
        super.init({

            orderNfId: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            orderNumber: {
                type: DataTypes.STRING,
                validate: {
                    allowNull: false
                }
            },
            orderPath: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            orderFileName: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            orderOriginalName: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            emissionDate: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            pdfFile: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            emitedTo: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            nNf: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            CTE: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            value: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            cnpjId: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            userId: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            buyerId: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            providerId: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            orderStatusBuyer: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: false
                }
            },
            orderStatusProvider: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: false
                }
            },
            deliveryReceipt: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            cargoPackingList: {
                type: DataTypes.STRING,
                validate: {
                    defaultValue: null
                }
            },
            deliveryCtrc: {
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
            as: 'orderCnpj'
        });
        this.belongsTo(models.user, {
            foreignKey: 'userId',
            as: 'orderuser'
        });
        this.belongsTo(models.buyer, {
            foreignKey: 'buyerId',
            as: 'buyeruser'
        });
        this.belongsTo(models.provider, {
            foreignKey: 'providerId',
            as: 'providerorder'
        });
    }
}




module.exports = order