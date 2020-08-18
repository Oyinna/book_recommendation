const Feedback = require('../dbfunction/feedbacks');

const FeedbackController = {
  createNewRecord: async (req, res) => {
    try {
      const feedback = req.body;
      //   check if feedback is an array
      const isArray = Array.isArray(feedback);
      if (!isArray) {
        return res.status(400).send({
          success: false,
          message: 'complete the feedback!',
        });
      }
      // check if feedback is complete
      if (feedback.length !== 20) {
        return res.status(400).send({
          success: false,
          message: 'complete the feedback',
        });
      }

      // save user to DB
      const feedbackInfo = await Feedback.create(feedback);
      if (!feedbackInfo) {
        return res.status(409).send({
          success: false,
          message: 'Failed! please try again.',
        });
      }
      return res.status(200).send({
        success: true,
        message: 'Thank you for the feedback',
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Failed! Please try again',
      });
    }
  },
};

module.exports = FeedbackController;
