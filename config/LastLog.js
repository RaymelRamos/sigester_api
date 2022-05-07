var logs=require('./logBuilder');
/* Remove any classified information from the response. */
function validJSON(body){
    if (/^[\],:{}\s]*$/.test(body.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

       return JSON.parse(body)

    }else{

        return body

    }
}
var resLog = function (req,res, next) {
    const defaultWrite = res.write;
    const defaultEnd = res.end;
    const chunks = [];

    res.write = (...restArgs) => {
        chunks.push(new Buffer(restArgs[0]));
        defaultWrite.apply(res, restArgs);
    };

    res.end = (...restArgs) => {
        if (restArgs[0]) {
            chunks.push(new Buffer(restArgs[0]));
        }
        const body = Buffer.concat(chunks).toString('utf8');
        req.body.password=undefined;
        if(res.statusCode>=400){
            logs.errorLog(req,res,res.statusCode, res.statusMessage, validJSON(body))
        }
        else if(res.statusCode>=200 && res.statusCode<300){
            logs.infoLog(req,res,res.statusCode, res.statusMessage, validJSON(body))
        }
        else {
            logs.warnLog(req,res,res.statusCode, res.statusMessage, validJSON(body))
        }

        defaultEnd.apply(res, restArgs);
    };

    next();
};

module.exports = resLog;
