const User = require('../models/user');

const UserDBClass = {
  create: async (firstname, lastname, email, password) => {
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    }, {
      fields: ['firstname', 'lastname', 'email', 'password'],
    });

    return user;
  },

  userExist: async (email) => {
    const userExist = await User.findOne({ where: { email } });
    return userExist;
  },

};

module.exports = UserDBClass;
