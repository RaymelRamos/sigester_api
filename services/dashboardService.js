const { GET, POST, PUT, DELETE } = require('../repositories/acs')
const { parseModemsForPieGraph, parseModemsByModels } = require('../adapters/dashboardAdapter')

const getModemsForPieGraph = (url) =>
    new Promise((resolve, reject) => {
        GET(`${url}/devices?projection=_lastInform`)
            .then((response) => {
                console.log(response)

                resolve(parseModemsForPieGraph(response.data))
            })
            .catch((error) => {
                console.log(error)
                reject(error);
            })
    })

const getModemsByModels = (url) =>
    new Promise((resolve, reject) => {
        GET(`${url}/devices?projection=VirtualParameters,_lastInform,_tags,InternetGatewayDevice.DeviceInfo.HardwareVersion._value,_deviceId`)
            .then((response) => {
                console.log(response)

                resolve(parseModemsByModels(response.data))
            })
            .catch((error) => {
                console.log(error)
                reject(error);
            })
    })



module.exports = { getModemsForPieGraph, getModemsByModels }