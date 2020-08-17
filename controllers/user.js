const User = require('../models/user');

const UserController = {
  signup: async (req, res) => {
    try {
      const {
        firstname, lastname, email, password,
      } = req.body;
      const user = await User.create({
        firstname,
        lastname,
        email,
        password,
      }, {
        fields: ['firstname', 'lastname', 'email', 'password'],
      });
      if (!user) {
        return res.status(200).send({
          success: false,
          message: 'signup failed',
        });
      }
      return res.status(200).send({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message || 'signup failed',
      });
    }
  },
};

module.exports = UserController;
