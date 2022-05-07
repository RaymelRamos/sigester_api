const express = require('express');
const router = express.Router();

//Controllers
const parametroController = require('../controllers/parametroController');
const permissionMiddleware = require('../middlewares/permissionMiddleware')

router.get('', parametroController.getAll); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', parametroController.find); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.post('', parametroController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.get('/:id', parametroController.getById); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

router.patch('/:id', parametroController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

router.delete('/:id', parametroController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;