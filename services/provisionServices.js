const { GET, POST, PUT, DELETE } = require('../repositories/acs')

const putProvisionsService = async (url, provisions_name, body) => {
    return await PUT(`${url}/provisions/${provisions_name}`, body)
}

const deleteProvisionsService = async (url, provisions_name) => {
    return await DELETE(`${url}/provisions/${provisions_name}`, null)
}

const getProvisionsService = async (url) => {
    return await GET(`${url}/provisions`)
}

module.exports = { putProvisionsService, deleteProvisionsService, getProvisionsService }
