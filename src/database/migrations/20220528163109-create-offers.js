'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tax: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      tariff: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      adValorem: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      float: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      iof: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      expiresIn: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        validate: {
          allowNull: false
        }
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        validate: {
          allowNull: false
        }
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          allowNull: false
        }
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sponsors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          allowNull: false
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
    return queryInterface.dropTable('offers');
  }
};