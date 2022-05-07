const { auth } = require('../repositories/ldap_connection')
const userServ = require('../services/usuarioService')
const rolServ = require('../services/rolService')
const { TOKEN_SECRET, TOKEN_VALID } = process.env

const jwt = require('jsonwebtoken')

const login = async (username, password, module) => {
        let query = { filter: `{"nombre_usuario": "${username}"}` }
        const user = await userServ.find(query)
        if (user.data.length > 0 && user.data[0].module.includes(module)) {
                let rol = await rolServ.getById(user.data[0].role)
                let ldap = await auth(username, password)
                if (ldap) {

                        const accessToken = jwt.sign({ username: username, module: module, routes: rol.rol_ruta }, TOKEN_SECRET, {
                                expiresIn: TOKEN_VALID
                        })
                        return accessToken
                }
                return null
        }
        return null;
}

module.exports = { login }