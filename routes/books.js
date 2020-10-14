const express = require('express');
const BookController = require('../controllers/book');
const authenticateToken = require('./authenticateToken');

const router = express.Router();

/* GET users listing. */
router.get('/:userId', authenticateToken, BookController.recommend);
router.post('/uploads', authenticateToken, BookController.uploadCSV);

module.exports = router;
