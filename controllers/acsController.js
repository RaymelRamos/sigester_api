const { getAllListParamsService, getFindParamsService } = require('../services/acsService')
const {RESIDENCIAL_ACS, FWA_ACS, EMPRESARIAL_ACS} = process.env
const errorParser = require('../config/ErrorParser')

var getAllListParamsController = async (req, res) => {
    try {
        let partner = await getAllListParamsService(get_endpoint(req), req.query)
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
        let partner = await getFindParamsService(get_endpoint(req), req)
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



var get_endpoint = (req) => {
     switch(req.header('x-app-module'))
      {
        case 'FWA': return FWA_ACS;break;
        case 'Residencial': return RESIDENCIAL_ACS;break;
        case 'Empresarial': return EMPRESARIAL_ACS;break;
      }
}

module.exports = { getAllListParamsController, getFindParamsController }