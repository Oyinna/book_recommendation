/* eslint-disable strict */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      isn: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2182718,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Improve Your Bowls',
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Tony Allcock',
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Sports & Outdoors',
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
    await queryInterface.dropTable('Books');
  },
};
