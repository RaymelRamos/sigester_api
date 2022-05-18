const { GET, POST, PUT, DELETE } = require('../repositories/acs')

/**
 * 
 * @param {Servidor ACS a acceder} url 
 * @param {Entidad a consultar (devices, tasks, faults, files, presets, provisions )} collection 
 * @param {Parametros opcionales pasados a traves de la URL} query 
 * @returns Lista de entidades consultas segun los parametros pasados en la URL
 */
const getService = async (url, collection, query) => {
    return await GET(`${url}/${collection}/?${query.query == undefined ? '' : `query=${query.query}`}${query.projection == undefined ? '' : `&projection=${query.projection}`}`)
}

const postDeviceService = async (url,id, body) => {
    return await POST(`${url}/devices/${id}/tasks?timeout=3000&connection_request`, body)
}

const postTaskService = async (url,id, body) => {
    return await POST(`${url}/tasks/${id}/retry`, body)
}

const deleteTasksService = async (url,id) => {
    return await DELETE(`${url}/tasks/${id}`, null)
}

const deleteFaultService = async (url,id) => {
    return await DELETE(`${url}/faults/${id}`, null)
}

const deleteDeviceService = async (url,id) => {
    return await DELETE(`${url}/devices/${id}`, null)
}

const postTagService = async (url,id, tags) => {
    return await POST(`${url}/devices/${id}/tags/${tags}`, null)
}

const deleteTagsService = async (url,id, tags) => {
    return await DELETE(`${url}/devices/${id}/tags/${tags}`, null)
}




module.exports = { getService, postDeviceService, postTaskService, deleteTasksService, deleteFaultService, deleteDeviceService, postTagService, deleteTagsService }