const { GET, POST, PUT, DELETE } = require('../repositories/acs')
const { parseModemsForPieGraph, parseModemsByModels, adaptDVT, adaptClient } = require('../adapters/dashboardAdapter')

const getModemsForPieGraph = async (url) =>
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

const getModemsByModels = async (url) =>
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


// Temp
const fs = require('fs')
// end temp

const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
    }, [])
}

const getReportByDVTService = async (url) => {

    let devices = await GET(`${url}/devices`)

    let data = devices.data.map(x => {
        if (x.hasOwnProperty('VirtualParameters'))
            return adaptDVT(x)
    })

    let ready = data.filter(x => x != undefined).map(adaptClient)

    /** Example
    '{"value":["{\\"servicioD\\":\\"H  ED901700\\",\\"servicioF\\":\\"7 2612647\\",\\"dt\\":\\"DT OESTE\\",\\"planta\\":\\"LA LISA\\",\\"nombre\\":\\"MARICELA BARBÓN ARIAS\\",\\"direccion\\":\\"190  /69  y 81  # 6905\\",\\"ruta\\":\\"Cable: AL57, Par: 26, Terminal: 2F, Dirección Terminal: 65 Y 180\\"}","xsd:string"]}'
    **/


    //let val = ready.map(adaptClient)

    let result = groupBy(ready, "dt")
    console.log(result)

    const dvt = Object.keys(result)

    let dev = []

    for (var i = 0; i < dvt.length; i++) {
        dev.push({ 'dt': dvt[i], 'count': result[dvt[i]].length })
    }

    let ret = { count: -1, list_dev: [] }
    ret.count = devices.data.length
    ret.list_dev = dev

    return ret;

}

module.exports = { getModemsForPieGraph, getModemsByModels, getReportByDVTService }