/* eslint-disable strict */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Feedbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      feedback: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'liked the book',
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
    await queryInterface.dropTable('Feedbacks');
  },
};
