/* eslint-disable strict */

'use strict';

const {
  DataTypes,
} = require('sequelize');

const sequelize = require('./index');
const Feedback = require('./feedback');

const User = sequelize.define('User', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Chinyelu',
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Ibute',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'chinyeluibute@gmail.com',
    unique: true,
  },
}, {
  sequelize,
  modelName: 'User',
});

// User.sync();
User.hasMany(Feedback, { foreignKey: 'user_id', sourceKey: 'id' });
Feedback.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

module.exports = User;
