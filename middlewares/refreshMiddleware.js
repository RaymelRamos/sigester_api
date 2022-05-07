const refresh = require('../repositories/access')
const errorParser = require('../config/ErrorParser')

const refresh_token = async (req, res, next) => 
{
    try
    {
        let new_access = await refresh.token_refresh({"refresh": req.REFRESH});
        req.AUTH = `Bearer ${new_access.data.access}`
        next()
    }
    catch(e)
    {
        throw e;
    }
}

module.exports = {refresh_token};