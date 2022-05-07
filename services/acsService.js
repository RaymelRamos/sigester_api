const { GET, POST, PUT, DELETE } = require('../repositories/acs')
const { parseModemsForPieGraph } = require('../adapters/dashboardAdapter')


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJheW1lbC5yYW1vcyIsIm1vZHVsZSI6IkZXQSIsInJvdXRlcyI6WyJfX2FsbF9fIl0sImlhdCI6MTY1MDY0MTc3MiwiZXhwIjoxNjUwNjQxODU4fQ.ZmbTLunJXbRmWkhx5MEGWICbeIr2-6QBDACS7QQ4RJA
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



module.exports = { getModemsForPieGraph }