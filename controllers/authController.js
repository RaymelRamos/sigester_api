const { login } = require('../services/authService')
const errorParser = require('../config/ErrorParser')

var auth = async (req, res, next) => {
    try {
        const payload = await login(req.body.username, req.body.password, req.body.module)
        if (payload == null) {
            const errorFormat = errorParser.errorFormat('Unauthorized', 'This user does\'nt permissions.', "uuid", req.params.id, "This user does\'nt permissions.", req.id)
            res.status(403).json(errorFormat);
            return;
        }
        else {
            res.status(200).json({ token: payload });
            return;
        }

    } catch (e) {
        next(e);
    }
}

module.exports = { auth }