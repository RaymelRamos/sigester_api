const { get_devicesService, post_paramsService } = require('../services/deviceService')
var { errorHandler } = require('../config/ErrorParser')

const get_devicesController = async (req, res) => {
    try {
        let devices = await get_devicesService(req.acs_endpoint, req.query)
        if (devices == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Device not found in the database.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        } else {
            res.status(200).json(devices.data)
        }
    }
    catch (err) {
        console.log(err)
        const error = errorHandler(err, req);
        res.status(400).json(error);
    }
}

const post_paramsController = async (req, res) => {
    try {
        let params = await post_paramsService(req.acs_endpoint, req.params.id, req.body)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Device not found in the database.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        } else {
            res.status(200).json(params.data)
        }
    }
    catch (err) {
        console.log(err)
        const error = errorHandler(err, req);
        res.status(400).json(error);
    }
}


module.exports = { get_devicesController, post_paramsController }