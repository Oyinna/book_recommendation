const csv = require('csv-parser');
const fs = require('fs');
const User = require('../dbfunction/users');
const Book = require('../dbfunction/books');

const BookController = {
  recommend: async (req, res) => {
    try {
      // check user id was passed and if he exist
      const userExist = await User.fetchUser(req.params.userId);
      const { userId } = req.params;
      console.log(userId, 'userIdbbbbbbb', userExist, 'userExistiiiiiii');
      if (!userId || !userExist) {
        return res.status(400).send({
          success: false,
          message: 'user dose not exist',
        });
      }

      // fetch recommendation
      const recommendation = await Book.fetchRecommendation();
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

  uploadCSV: async (req, res) => {
    try {
      const results = [];

      return fs.createReadStream('Books.csv')
        .pipe(csv(['asin', 'title', 'auther', 'genre']))
        .on('data', (Books) => results.push(Books))
        // .on('end', () => console.log(results));
        .on('end', async () => {
          try {
            const books = await Book.create(results);
            if (!books) {
              return res.status(400).send({
                message: 'not saved',
              });
            }
            return res.status(201).send({
              data: books,
            });
          } catch (error) {
            return console.log(error);
          }
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
