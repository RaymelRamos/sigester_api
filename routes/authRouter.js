const express = require('express');
const router = express.Router();

//Controllers
const authController = require('../controllers/authController');

/**
   * @swagger
   * /api/v1/auth/login:
   *    post:
   *        description: This API for authenticate users by typing username, password and module
   *        consumes:
   *        - application/json
   *        produces:
   *        - application/json
   *        parameters:
   *        - in: body
   *          name: User cerdentials
   *          schema:
   *            $ref: '#/definitions/User'
   *        responses:
   *            200:
   *                description: everything is ok
   *            400:
   *                description: bad request
   *            500:
   *                description: internal server error
   * definitions:
   *     User:
   *        type: object
   *        required:
   *        - username
   *        - password
   *        - module
   *        properties:
   *            username:
   *                    type: string
   *                    example: ahmed123
   *            password:
   *                    type: string
   *                    example: 1234
   *            module:
   *                    type: string
   *                    example: FWA
   */
router.post('/login', authController.auth);

module.exports = router;