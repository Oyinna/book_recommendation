/* eslint-disable strict */

'use strict';

const {
  DataTypes,
} = require('sequelize');

const sequelize = require('./index');
const Feedback = require('./feedback');

const Book = sequelize.define('Book', {
  asin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auther: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Book',
});
Book.hasMany(Feedback, { foreignKey: 'book_id', sourceKey: 'id' });
Feedback.belongsTo(Book, { foreignKey: 'book_id', targetKey: 'id' });

module.exports = Book;
