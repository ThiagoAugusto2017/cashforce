'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      orderNfId: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      orderNumber: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      orderPath: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      orderFileName: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      emissionDate: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      pdfFile: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      emitedTo: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      nNf: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      CTE: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      value: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          defaultValue: null
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          defaultValue: null
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'buyers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          defaultValue: null
        }
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'provider',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          defaultValue: null
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: false
        }
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: false
        }
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};