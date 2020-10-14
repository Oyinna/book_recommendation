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
    if (!user) {
      return false;
    }
    return user;
  },

  userExist: async (email) => {
    const userExist = await User.findOne({ where: { email } });
    if (!userExist) {
      return false;
    }
    return userExist;
  },

  fetchAll: async () => {
    const userExist = await User.findAll();
    console.log('okay 1');
    console.log(userExist, 'okay');
    if (!userExist.length) {
      return false;
    }
    return userExist;
  },

  fetchUser: async (userId) => {
    const userExist = await User.findOne({ where: { id: userId } });
    if (!userExist) {
      return false;
    }
    return userExist;
  },

};

module.exports = UserDBClass;
