const { GET } = require('../repositories/acs')
const { concatAllParams } = require('../adapters/acsAdapter')


/**
 * @description Get all params from a specific partner
 * @param {string} partner
 * @returns {Promise<string[]>}
 * @memberof acsService
 * Device Part
 * Methods from devices in acs
 *  
 **/
const getAllListParamsService = (url, query) =>
    new Promise((resolve, reject) => {
        console.log(`${url}/devices?query=${query.query}`)
        GET(`${url}/devices?query=${query.query}`)
            .then((response) => {
                resolve(concatAllParams(response.data))
            })
            .catch((error) => {
                reject(error);
            })
    })

const getFindParamsService = (url, query) => {
    return new Promise((resolve, reject) => {
        GET(`${url}/devices?${query}`)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error);
            }
            )
    }
    )
}

module.exports = { getAllListParamsService, getFindParamsService }