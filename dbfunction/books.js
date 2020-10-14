const Book = require('../models/book');

const RecommendDBClass = {

  fetchRecommendation: async () => {
    const recommend = await Book.findAll({ limit: 20 });
    if (!recommend.length) {
      return false;
    }
    return recommend;
  },

  create: async (results) => {
    const books = await Book.bulkCreate(results, {
      fields: ['asin', 'title', 'auther', 'genre'],
    });
    if (!books) {
      return false;
    }
    return books;
  },

};

module.exports = RecommendDBClass;
