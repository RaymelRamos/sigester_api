const express = require('express');
const router = express.Router();

//Controllers
const acsController = require('../controllers/dashboardController');

router.get('/pie_graph', acsController.pieGraph);
router.get('/getcountbymodel', acsController.modemByModel);

module.exports = router;
