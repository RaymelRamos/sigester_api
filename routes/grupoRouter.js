const express = require('express');
const router = express.Router();

//Controllers
const grupoController = require('../controllers/grupoController');
const permissionMiddleware = require('../middlewares/permissionMiddleware')
const refresh = require('../middlewares/refreshMiddleware')

router.get('', grupoController.getAll); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', grupoController.find); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

// router.post('', grupoController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.get('/:id', grupoController.getById); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

// router.patch('/:id', grupoController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

// router.delete('/:id', grupoController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;