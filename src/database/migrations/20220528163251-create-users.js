'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.TINYINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          allowNull: false
        }
      },
      phoneNumber: {
        type: Sequelize.STRING,

      },
      mobile: {
        type: Sequelize.STRING,

      },
      departament: {
        type: Sequelize.INTEGER,

      },
      verificationCode: {
        type: Sequelize.INTEGER,

      },
      emailChecked: {
        type: Sequelize.BOOLEAN,
        validate: {
          allowNull: false
        }
      },
      cashforceAdm: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('users');
  }
};