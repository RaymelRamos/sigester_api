const express = require('express');
const router = express.Router();

//Controllers
const usuarioController = require('../controllers/usuarioController');
const permissionMiddleware = require('../middlewares/permissionMiddleware')

router.get('', usuarioController.getAll); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', usuarioController.find); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.post('', usuarioController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.get('/:id', usuarioController.getById); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

router.patch('/:id', usuarioController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

router.delete('/:id', usuarioController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;