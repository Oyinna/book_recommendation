const Book = require('../models/book');

const RecommendDBClass = {

  fetchRecommendation: async () => {
    const recommend = await Book.find({ limit: 20 });
    if (!recommend.length) {
      return false;
    }
    return recommend;
  },

};

module.exports = RecommendDBClass;
