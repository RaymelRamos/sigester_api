const jwt_decode = require('jwt-decode');
const errorParser = require('../config/ErrorParser')

function verify_permissions(route) {
    return function(req, res, next) {
        var decoded = jwt_decode(req.AUTH);
        permissions =decoded.permission
        if(permissions.includes(route))
            next()
        else 
            res.status(403).json(errorParser.errorFormat('Forbidden', 'Forbidden access', "User Credentials", undefined, 'This user does not have permissions', req.id));
    }
  }

module.exports = {verify_permissions}