const axios = require("axios");

const POST = (url,data) => {
    return axios.post(url, data, config)
}

const DELETE = (url) => {
    return axios.delete(url)
}

const GET = (url) => {
    return axios.get(url)
}
const PUT = (url, data) => {
    return axios.put(url, data, config)
}
const PATCH = (url,data) => {
    return axios.patch(url, data)
}


module.exports = {
    GET, POST, PUT, DELETE
}
