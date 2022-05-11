const _ = require('lodash');

const parseModemsForPieGraph = (data) => {
    let list = []
    var compare = new Date()
    compare.setDate(compare.getDate() - 1)
    let line = data.filter(item => new Date(item['_lastInform']) >= compare)
    list.push(
        {
            cantidad: line.length,
            estado: "Activo"
        })
    list.push(
        {
            cantidad: data.length - line.length,
            estado: "No Activo"
        })
    return list;
}

const adaptModelManufacture = (x) => (
    {
        model: x['InternetGatewayDevice']['DeviceInfo']['HardwareVersion']['_value'],
        fabricante: x['_deviceId']['_Manufacturer'], 
    })

const parseModemsByModels = (array) =>
{
    console.log(array)
    let aux = array.map(x => adaptModelManufacture(x)); 
    return  _.countBy(aux, `fabricante`);
    //return _.groupBy(array, array['InternetGatewayDevice']['DeviceInfo']['HardwareVersion']['_value'] !== undefined ? 'InternetGatewayDevice.DeviceInfo.HardwareVersion._value' : '').map( this.adaptModelManufacture);
}

module.exports =
{
    parseModemsForPieGraph,
    parseModemsByModels
}