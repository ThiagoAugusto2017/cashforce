'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nDup: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      dVenc: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      vDup: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      availableToMarket: {
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
    return queryInterface.dropTable('orderportions');
  }
};