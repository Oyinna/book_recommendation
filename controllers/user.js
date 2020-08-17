require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../dbfunction/users');

function generateToken(user) { return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1w' }); }

const UserController = {
  signup: async (req, res) => {
    try {
      const {
        firstname, lastname, email, password,
      } = req.body;

      // check if user exist
      const userExist = await User.userExist(email);
      if (userExist) {
        return res.status(409).send({
          success: false,
          message: `User already exist ${userExist.email}`,
        });
      }

      // check for empty fields
      if (!firstname || !lastname || !email || !password) {
        return res.status(400).send({
          success: false,
          message: 'complete the empty fields before submitting',
        });
      }

      // validate email
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validAmail = re.test(String(email).toLowerCase());
      if (!validAmail) {
        return res.status(400).send({
          success: false,
          message: 'enter a valid email address',
        });
      }

      // hash password
      const BCRYPT_SALT_ROUNDS = 12;
      const hashPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
      // save user to DB
      const user = await User.create(firstname, lastname, email, hashPassword);
      if (!user) {
        return res.status(400).send({
          success: false,
          message: 'Sign up failed.',
        });
      }
      const accessToken = generateToken(user);
      return res.status(200).send({
        accessToken,
        success: true,
        data: user.id,
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: error.message || 'signup failed',
      });
    }
  },

  // login user
  login: async (req, res) => {
    try {
      const {
        email, password,
      } = req.body;
      // check if user exist
      const userInfo = await User.userExist(email);

      if (!userInfo) {
        return res.status(400).send({
          success: false,
          message: 'Incorrect email or password',
        });
      }

      const confirmPassword = await bcrypt.compare(password, userInfo.dataValues.password);

      if (!confirmPassword) {
        return res.status(409).send({
          success: false,
          message: 'Incorrect email or password',
        });
      }
      const accessToken = generateToken(userInfo);
      return res.status(200).send({
        accessToken,
        success: true,
        data: userInfo.id,
      });
    } catch (err) {
      return res.status(400).send({
        success: false,
        message: err.message || 'login failed.',
      });
    }
  },
};

module.exports = UserController;
