'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('providers', {
      id: {
        type: Sequelize.INTEGER,
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
      tradingName: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      cashforceTax: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      responsibleName: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      responsibleEmail: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      responsiblePosition: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      responsiblePhone: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      responsibleMobile: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      website: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      postalCode: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      address: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      complement: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      neighborhood: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      city: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      bank: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      bankAgency: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      documents: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      phoneNumber: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      situation: {
        type: Sequelize.STRING,
        validate: {
          defaultValue: null
        }
      },
      situationDate: {
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
      email: {
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
    return queryInterface.dropTable('providers');
  }
};