const {
    getDeviceService,
    getTaskService,
    postDeviceService,
    deleteTasksService,
    deleteFaultService,
    deleteDeviceService,
    postTagService,
    deleteTagsService,
    postTaskService,
    getFaultsService
} = require('../services/deviceService')
var { errorHandler } = require('../config/ErrorParser')

const getDevicesController = async (req, res) => {
    try {
        let devices = await getDeviceService(req.acs_endpoint, req.query)
        if (devices == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Device not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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

const postDeviceController = async (req, res) => {
    try {
        let params = await postDeviceService(req.acs_endpoint, req.params.id, req.body)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Device not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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

const getTasksController = async (req, res) => {
    try {
        let tasks = await getTaskService(req.acs_endpoint, req.query)
        if (tasks == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Task not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        } else {
            res.status(200).json(tasks.data)
        }
    }
    catch (err) {
        const error = errorHandler(err, req);
        res.status(400).json(error);
    }
}

const postTaskController = async (req, res) => {
    try {
        let params = await postTaskService(req.acs_endpoint, req.params.id, req.body)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Task not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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

const deleteTasksController = async (req, res) => {
    try {
        let params = await deleteTasksService(req.acs_endpoint, req.params.id)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Task not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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

const deleteFaultController = async (req, res) => {
    try {
        let params = await deleteFaultService(req.acs_endpoint, req.params.id)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Fault not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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

const deleteDeviceController = async (req, res) => {
    try {
        let params = await deleteDeviceService(req.acs_endpoint, req.params.id)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Device not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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

const postTagController = async (req, res) => {
    try {
        let params = await postTagService(req.acs_endpoint, req.params.id, req.body)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Tag not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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

const deleteTagsController = async (req, res) => {
    try {
        let params = await deleteTagsService(req.acs_endpoint, req.params.id)
        if (params == null) {
            const errorFormat = errorParser.errorFormat('Object Not Found', 'Tag not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
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


const getFaultsController = async (req, res) => {
    try {
        let faults = await getFaultsService(req.acs_endpoint, req.query)
        if (faults == null) {

            const errorFormat = errorParser.errorFormat('Object Not Found', 'Fault not found in the acs.', "uuid", req.params.id, "There is no object with that id.", req.id)
            res.status(404).json(errorFormat);
        }
        else {
            res.status(200).json(faults.data)
        }
    }
    catch (err) {
        console.log(err)
        const error = errorHandler(err, req);
        res.status(400).json(error);
    }
}


module.exports = { 
    getDevicesController,
    getFaultsController,  
    getTasksController, 
    postTagController,
    postDeviceController,
    postTaskController,
    deleteTasksController, 
    deleteFaultController, 
    deleteTagsController,
    deleteDeviceController
}