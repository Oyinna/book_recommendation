const express = require('express');
const UserController = require('../controllers/user');

const router = express.Router();

/* GET users listing. */
router.post('/', UserController.signup);

module.exports = router;
