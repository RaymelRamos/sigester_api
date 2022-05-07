const express = require('express');
const router = express.Router();

//Controllers
const tipoServicioController = require('../controllers/tipoServicioController');
const permissionMiddleware = require('../middlewares/permissionMiddleware')
const refresh = require('../middlewares/refreshMiddleware')

router.get('', tipoServicioController.getAll); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', tipoServicioController.find); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

// router.post('', tipoServicioController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.get('/:id', tipoServicioController.getById); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

// router.patch('/:id', tipoServicioController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

// router.delete('/:id', tipoServicioController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;