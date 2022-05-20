const express = require('express');
const router = express.Router();

//Controllers
const presetController = require('../controllers/presetController');

router.get('', presetController.getPresetController);

router.put('/:preset_name', presetController.putPresetController);

router.delete('/:preset_name', presetController.deletePresetController);


module.exports = router;