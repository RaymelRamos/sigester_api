const presetService = require('../services/presetService');
const errorParser = require('../config/ErrorParser');

const putPresetController = async (req, res) => {
    try {
        const { name_preset, body } = req.body;
        const result = await presetService.putPresetService(req.url, name_preset, body);
        res.status(result.statusCode).send(result.body);
    } catch (error) {
        res.status(error.statusCode).send(error.body);
    }
}

const deletePresetController = async (req, res) => {
    try {
        const { name_preset } = req.params;
        const result = await presetService.deletePresetService(req.url, name_preset);
        res.status(result.statusCode).send(result.body);
    } catch (error) {
        res.status(error.statusCode).send(error.body);
    }
}

const getPresetController = async (req, res) => {
    try {
        const result = await presetService.getPresetService(req.url);
        res.status(result.statusCode).send(result.body);
    } catch (error) {
        res.status(error.statusCode).send(error.body);
    }
}

module.exports = { putPresetController, deletePresetController, getPresetController };