/* eslint-disable strict */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Chinyelu',
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Ibute',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'chinyeluibute@gmail.com',
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
