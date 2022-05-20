const express = require('express');
const router = express.Router();

//Controllers
const provisionController = require('../controllers/provisionController');

router.get('', provisionController.getProvisionController);

router.put('/:provisions_name', provisionController.putProvisionController);

router.delete('/:provisions_name', provisionController.deleteProvisionController);


module.exports = router;