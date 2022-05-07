const express = require('express');
const router = express.Router();

//Controllers
const acsController = require('../controllers/acsController');

router.get('/pie_graph', acsController.pieGraph);

module.exports = router;
