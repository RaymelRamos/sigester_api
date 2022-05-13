const express = require('express');
const router = express.Router();

//Controllers
const acsController = require('../controllers/acsController');

router.get('/get_all_list_params', acsController.getAllListParamsController);
router.get('/get_find_params', acsController.getFindParamsController);

module.exports = router;
