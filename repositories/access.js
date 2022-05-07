const axios = require("axios");
// process.env.AUTH_API

const POST = (url,data, token) => {
    let config = getHeaders(token)
    return axios.post(url, data, config)
}

const DELETE = (url, token) => {
    let config = getHeaders(token)
    return axios.delete(url, config)
}

const GET = (url, token) => {
    let config = getHeaders(token)
    return axios.get(url, config)
}
const PUT = (url, data, token) => {
    let config = getHeaders(token)
    return axios.put(url, data, config)
}
const PATCH = (url,data, token) => {
    let config = getHeaders(token)
    return axios.patch(url, data, config)
}

const getHeaders = (token) => {
    let headers = {
        headers:
            {
                'Authorization': `${token}`
            }
    }
    return headers
}

const register_user = async (body, token) => POST(`${process.env.AUTH_API}/auth/register`,body, token);

const update_user = async (id_user, body, token) => PUT(`${process.env.AUTH_API}/auth/update_profile/${id_user}/`,body, token);

const delete_user = async (id_user, token) => DELETE(`${process.env.AUTH_API}/auth/delete_profile/${id_user}/`, token);

const delete_user_logic = async (id_user, body, token) => PATCH(`${process.env.AUTH_API}/auth/delete_profile_logic/${id_user}/`, body, token);

const token_refresh = async (body) => POST(`${process.env.AUTH_API}/auth/login/refresh`, body);

// axios.interceptors.response.use((response) => {
//     return response;
// });

// axios.interceptors.request.use((response) => {
//     return response;
// });

module.exports = {register_user, delete_user, update_user, delete_user_logic, token_refresh}