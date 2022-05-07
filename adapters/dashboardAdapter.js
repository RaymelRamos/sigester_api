const parseModemsForPieGraph = (data) => {
    console.log(data)
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

module.exports =
{
    parseModemsForPieGraph
}