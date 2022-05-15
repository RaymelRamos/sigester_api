const { getAllListParamsService, getFindParamsService } = require('../services/acsService')
const errorParser = require('../config/ErrorParser')

var getAllListParamsController = async (req, res) => {
    try {
        let partner = await getAllListParamsService(req.acs_endpoint, req.query)
        if (partner == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Pie not found in the database.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        } else {
            res.status(200).json(partner)
        }
    }
    catch (e) {
        console.log(e)
        let mongoError = errorParser.mongoErrorCather(e, req.id);
        res.status(400).json(mongoError);
    }
};

var getFindParamsController = async (req, res) => {
    try {
        let partner = await getFindParamsService(req.acs_endpoint, req.query)
        if (partner == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Pie not found in the database.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        } else {
            res.status(200).json(partner)
        }
    }
    catch (e) {
        console.log(e)
        let mongoError = errorParser.mongoErrorCather(e, req.id);
        res.status(400).json(mongoError);
    }
};

module.exports = { getAllListParamsController, getFindParamsController }