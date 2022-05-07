const express = require('express');
const router = express.Router();

//Controllers
const quejaSiprecController = require('../controllers/queja_siprecController');
const permissionMiddleware = require('../middlewares/permissionMiddleware')
const refresh = require('../middlewares/refreshMiddleware')

router.get('', quejaSiprecController.getAll); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', quejaSiprecController.find); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

// router.post('', quejaSiprecController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.get('/:id', quejaSiprecController.getById); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

// router.patch('/:id', quejaSiprecController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

// router.delete('/:id', quejaSiprecController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;