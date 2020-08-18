const express = require('express');
const FeedbackController = require('../controllers/feedback');

const router = express.Router();

/* GET users listing. */
router.post('/', FeedbackController.createNewRecord);

module.exports = router;
