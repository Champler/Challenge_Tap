'use strict';
module.exports = {async  up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
      await queryInterface.createTable('Games', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        state: {
          type: Sequelize.INTEGER,       
        },
        description: {
          type: Sequelize.STRING
        },
        cells_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Cells',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    }
  }
  
async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cells');
    await queryInterface.dropTable('Games');
}