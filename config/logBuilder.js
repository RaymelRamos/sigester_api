let logger=require('./winston');
function errorLog(req,res,code,message, bodyResponse){
    logGroupName=process.env.LOG_GROUP_NAME
    logStreamName=process.env.LOG_GROUP_STREAM
    logObject={
        Date: new Date(Date.now()),
        Method: req.method,
        Endpoint: req.baseUrl,
        IpAddress: req.ip,
        RequestID: req.id,
        RequestBody: req.body?req.body:"",
        RequestHeader: req.headers,
        ResponseHeader: res.getHeaders(),
        Params: req.params?req.params:"",
        Query: req.query?req.query:"",
        Message:message,
        ResponseCode:code,
        ResponseBody:bodyResponse
    };
    logger.error({logGroupName,logStreamName,message: bodyParser(logObject)});
}

function infoLog(req,res,code,message, bodyResponse){
    logGroupName=process.env.LOG_GROUP_NAME
    logStreamName=process.env.LOG_GROUP_STREAM
    logObject={
        Date: new Date(Date.now()),
        Method: req.method,
        Endpoint: req.baseUrl,
        IpAddress: req.ip,
        RequestID: req.id,
        RequestBody: req.body?req.body:"",
        RequestHeader: req.headers,
        ResponseHeader: res.getHeaders(),
        Params: req.params?req.params:"",
        Query: req.query?req.query:"",
        Message:message,
        ResponseCode:code,
        ResponseBody:bodyResponse
    };
    logger.info({logGroupName,logStreamName,message: bodyParser(logObject)});
}

function warnLog(req,res,code,message, bodyResponse){
    logGroupName=process.env.LOG_GROUP_NAME
    logStreamName=process.env.LOG_GROUP_STREAM
    logObject={
        Date: new Date(Date.now()),
        Method: req.method,
        Endpoint: req.baseUrl,
        IpAddress: req.ip,
        RequestID: req.id,
        RequestBody: req.body?req.body:"",
        RequestHeader: req.headers,
        ResponseHeader: res.getHeaders(),
        Params: req.params?req.params:"",
        Query: req.query?req.query:"",
        Message:message,
        ResponseCode:code,
        ResponseBody:bodyResponse
    };
    logger.warn({logGroupName,logStreamName,message: bodyParser(logObject)});
}
function bodyParser(body){
    stringObj=JSON.stringify(body);
    // backObj= JSON.parse(stringObj);
    return stringObj
}

module.exports.errorLog = errorLog;
module.exports.infoLog = infoLog;
module.exports.warnLog = warnLog;
