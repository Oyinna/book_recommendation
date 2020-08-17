/* eslint-disable strict */

'use strict';

const {
  DataTypes,
} = require('sequelize');

const sequelize = require('./index');
const Feedback = require('./feedback');

const Book = sequelize.define('Book', {
  isn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 2182718,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Improve Your Bowls',
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Tony Allcock',
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Sports & Outdoors',
  },
}, {
  sequelize,
  modelName: 'Book',
});
Book.hasMany(Feedback, { foreignKey: 'book_id', sourceKey: 'id' });
Feedback.belongsTo(Book, { foreignKey: 'book_id', targetKey: 'id' });

module.exports = Book;
