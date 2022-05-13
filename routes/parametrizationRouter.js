const express = require('express');
const router = express.Router();

//Controllers
const parametrizationController = require('../controllers/parametrizationController');
const permissionMiddleware = require('../middlewares/permissionMiddleware')
const refresh = require('../middlewares/refreshMiddleware')

router.get('', parametrizationController.getAll); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', parametrizationController.find); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.post('', parametrizationController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.get('/:id', parametrizationController.getById); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

// router.patch('/:id', parametrizationController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

router.delete('/:id', parametrizationController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;