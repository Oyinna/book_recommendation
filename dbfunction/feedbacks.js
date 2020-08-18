const Feedback = require('../models/feedback');

const FeedDBClass = {
  create: async (feedback) => {
    const feedbackDetail = await Feedback.bulkCreate(feedback, {
      fields: ['user_id', 'book_id', 'feedback'],
    });

    return feedbackDetail;
  },

};

module.exports = FeedDBClass;
