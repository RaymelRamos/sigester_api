const express = require('express');
const router = express.Router();

//Controllers
const deviceController = require('../controllers/deviceController');

router.get('/devices/find/', deviceController.getDevicesController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/faults/find/', deviceController.getFaultsController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.get('/tasks/find/', deviceController.getFaultsController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client'), 

router.post('/devices/:id/post/', deviceController.postDeviceController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

router.post('/tags/:id/:name/post/', deviceController.postTagController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

router.post('/tasks/:id/post/', deviceController.postTaskController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('view_client')

router.delete('/tasks/:id/delete/', deviceController.deleteTasksController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

router.delete('/faults/:id/delete/', deviceController.deleteFaultController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

router.delete('/tags/:id/:tag/delete/', deviceController.deleteTagsController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')

router.delete('/devices/:id/:tag/delete/', deviceController.deleteDeviceController); // ,refresh.refresh_token, permissionMiddleware.verify_permissions('delete_client')


module.exports = router;