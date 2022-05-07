const tipoServicioService = require('../services/tipo_servicioService');
const errorParser = require('../config/ErrorParser')

var getAll = async (req, res) => {
    try {
        let item = await tipoServicioService.getAll(req.query);

        res.set('X-Total', item.size);
        res.set('X-Limit', item.limit);
        res.set('X-Offset', item.skip);
        res.set('X-Size', item.size);

        res.status(200).json(item.data);
    } catch (e) {
        let mongoError = errorParser.mongoErrorCather(e, req.id);
        res.status(400).json(mongoError);
    }
};

var getById = async (req, res) => {
    try {
        let partner = await tipoServicioService.getById(req.params.id)
        if (partner == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Tipo Servicio not found in the database.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        } else {
            res.status(200).json(partner)
        }
    }
    catch (e) {
        let mongoError = errorParser.mongoErrorCather(e, req.id);
        res.status(400).json(mongoError);
    }
};

 var find = async (req, res) => {
    try {
        var data = await tipoServicioService.find(req.query);
        res.status(200).json(data);
    } catch (e) {
        let mongoError = errorParser.mongoErrorCather(e, req.id);
        res.status(400).json(mongoError);
    }
}

var create = async (req, res, next) => {
    try {
        const payload = await tipoServicioService.create(req.body, req.AUTH);
        res.status(200).json(payload);
    } catch (e) {
        next(e);
    }
}

var update = async (req, res, next) => {
    try {
        const payload = await tipoServicioService.update(req.params.id, req.body, req.AUTH);
        if (payload == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Tipo Servicio not found in the database.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        }
        else
            res.status(200).json(payload);
        } catch (e) {
            next(e);
        }
}

var remove = async (req, res) => {
    try {
        const payload = await tipoServicioService.remove(req.params.id, req.AUTH);
        if (payload == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Tipo Servicio not found in the database.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        }
        else
            res.status(200).json(payload);
    } catch (e) {
        let mongoError = errorParser.mongoErrorCather(e, req.id);
        res.status(400).json(mongoError);
    }
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    remove,
    find

}