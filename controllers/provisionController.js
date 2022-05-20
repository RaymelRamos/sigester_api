const provisionService = require('../services/provisionsService');
const errorParser = require('../config/ErrorParser')

const putProvisionController = async (req, res) => {
    try {
        const { provisions_name, body } = req.body;
        const result = await provisionService.putProvisionsService(req.url, provisions_name, body);
        res.status(result.statusCode).send(result.body);
    } catch (error) {
        res.status(error.statusCode).send(error.body);
    }
}

const deleteProvisionController = async (req, res) => {
    try {
        const { provisions_name } = req.params;
        const result = await provisionService.deleteProvisionsService(req.url, provisions_name);
        res.status(result.statusCode).send(result.body);
    } catch (error) {
        res.status(error.statusCode).send(error.body);
    }
}

const getProvisionController = async (req, res) => {
    try {
        const result = await provisionService.getProvisionsService(req.url);
        res.status(result.statusCode).send(result.body);
    } catch (error) {
        res.status(error.statusCode).send(error.body);
    }
}

module.exports = { putProvisionController, deleteProvisionController, getProvisionController }