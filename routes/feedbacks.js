const express = require('express');
const FeedbackController = require('../controllers/feedback');
const authenticateToken = require('./authenticateToken');

const router = express.Router();

/* GET users listing. */
router.post('/', authenticateToken, FeedbackController.createNewRecord);

module.exports = router;
