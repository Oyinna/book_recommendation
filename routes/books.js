const express = require('express');
const BookController = require('../controllers/book');

const router = express.Router();

/* GET users listing. */
router.get('/', BookController.recommend);

module.exports = router;
