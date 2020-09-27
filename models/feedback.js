/* eslint-disable strict */

'use strict';

const {
  DataTypes,
} = require('sequelize');

const sequelize = require('./index');

const Feedback = sequelize.define('Feedback', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Feedback',
});
module.exports = Feedback;
