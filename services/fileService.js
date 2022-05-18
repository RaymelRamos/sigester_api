const { GET, POST, PUT, DELETE } = require('../repositories/acs')

const putFileService = async (url, name_file, query) => {
    return await PUT(`${url}/files/${name_file}`)
}

const getFileService = async (url, query) => {
    return await GET(`${url}/files/?${query.query == undefined ? '' : `query=${query.query}`}${query.projection == undefined ? '' : `&projection=${query.projection}`}`)
}

const deleteFileService = async (url, name_file) => {
    return await DELETE(`${url}/files/${name_file}`, null)
}

module.exports = { putFileService, getFileService, deleteFileService }