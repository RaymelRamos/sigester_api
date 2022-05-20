const { GET, POST, PUT, DELETE } = require('../repositories/acs')

const putPresetService = async (url, name_preset, body) => {
    return await PUT(`${url}/presets/${name_preset}`, body)
}

const deletePresetService = async (url, name_preset) => {
    return await DELETE(`${url}/presets/${name_preset}`, null)
}

const getPresetService = async (url) => {
    return await GET(`${url}/presets/`, null)
}

module.exports = { putPresetService, deletePresetService, getPresetService }