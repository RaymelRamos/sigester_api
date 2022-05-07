const express = require('express');
const router = express.Router();

//Controllers
const nivelAccesoController = require('../controllers/nivelAccesoController');
const permissionMiddleware = require('../middlewares/permissionMiddleware')
const refresh = require('../middlewares/refreshMiddleware')

router.get('', nivelAccesoController.getAll); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', nivelAccesoController.find); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

// router.post('', nivelAccesoController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.get('/:id', nivelAccesoController.getById); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

// router.patch('/:id', nivelAccesoController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

// router.delete('/:id', nivelAccesoController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;