const express = require('express');
const router = express.Router();

//Controllers
const deviceController = require('../controllers/deviceController');

// router.get('', deviceController.get_devicesController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/find/', deviceController.get_devicesController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

// router.post('', deviceController.create); //,refresh.refresh_token, permissionMiddleware.verify_permissions('add_client')

router.post('/:id', deviceController.post_paramsController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

// router.patch('/:id', deviceController.update); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('change_client')

// router.delete('/:id', deviceController.remove); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

module.exports = router;