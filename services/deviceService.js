const { GET, POST, PUT, DELETE } = require('../repositories/acs')

const get_devicesService = async (url, query) => {
    return await GET(`${url}/devices/?${query.query == undefined ? '' : `query=${query.query}`}${query.projection == undefined ? '' : `&projection=${query.projection}`}`)
}

const post_paramsService = async (url,id, body) => {
    return await POST(`${url}/devices/${id}/tasks?connection_request`, body)
}


module.exports = { get_devicesService, post_paramsService }