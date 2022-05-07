const { authenticate } = require('ldap-authentication')
const { DATABASE_URL, LDAP_SERVER } = process.env

const auth = async (username, password) => {
    // auth with regular user
    options = {
        ldapOpts: {
            url: `ldap://${LDAP_SERVER}`,
            // tlsOptions: { rejectUnauthorized: false }
        },
        userDn: `uid=${username},ou=etecsa.cu,ou=People,dc=etecsa,dc=cu`,
        userPassword: password,
        userSearchBase: 'ou=etecsa.cu,ou=People,dc=etecsa,dc=cu',
        usernameAttribute: 'uid',
        username: username
    }

    return await authenticate(options)

}

module.exports = { auth }