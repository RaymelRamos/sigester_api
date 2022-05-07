const express = require('express');
const router = express.Router();

//Controllers
const authController = require('../controllers/authController');

router.post('', authController.auth);

module.exports = router;