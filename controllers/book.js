const User = require('../dbfunction/users');
const Recommend = require('../dbfunction/books');

const BookController = {
  recommend: async (req, res) => {
    try {
      // check user id was passed and if he exist
      const userExist = await User.fetchUser(req.params.userId);
      const { userId } = req.params;
      if (!userId || userExist) {
        return res.status(400).send({
          success: false,
          message: 'user dose not exist',
        });
      }

      // fetch recommendation
      const recommendation = await Recommend.fetchRecommendation();
      if (!recommendation) {
        return res.status(409).send({
          success: false,
          message: 'Failed! please try again.',
        });
      }
      return res.status(201).send({
        success: true,
        dats: recommendation,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error.message || 'Failed! Please try again',
      });
    }
  },
};

module.exports = BookController;
