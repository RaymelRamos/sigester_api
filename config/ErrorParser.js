const mongoose = require('mongoose')
function errorFormat(name, message, field, value, issue, requestId) {
    const errorFormat = {
        name,
        message,
        details: {
            field,
            value,
            issue,
        },
        requestId
    };
    return errorFormat
}

function mongoErrorCather(err, req_id, uuidPath, uuidValue) {
    let name = ""
    let value = "" || uuidValue
    let path = "" || uuidPath
    let type = ""
    let message = ""
    if (err.message == "Invalid UUID") {
        name = "TypeError"
        type = err.message
    } else if (err.errors != null) {
        let x = Object.keys(err.errors)[0]
        if (err.errors[x].reason != null) {
            name = "TypeError";
            value = err.errors[x].value;
            path = err.errors[x].path
            type = err.errors[x].kind
        } else {
            name = err.errors[x].name
            value = err.errors[x].properties.value
            path = err.errors[x].properties.path
            type = err.errors[x].properties.type
            message = err.errors[x].properties.message
        }
    } else if (err.driver != null) {
        name = "DuplicatedKey"
        value = err.keyValue[Object.keys(err.keyValue)]
        path = Object.keys(err.keyPattern)[0]
        type = "DuplicatedKeyValue"
    } else {
        return err
    }

    let result = errorFormat(name, messageRedactor(type, message, path), path, value, type, req_id)
    return result
}

function messageRedactor(type, errorMessage, path) {
    let message = errorMessage
    if (type == "minlength") {
        message = " value is shorter than the minimum allowed length"
    } else if (type == "maxlength") {
        message = "value is longer than the maximum allowed length"
    } else if (type == "enum") {
        message = "not valid enum value"
    } else if (type == "Number") {
        message = "value must be of type Number"
    } else if (type == "Boolean") {
        message = "value must be of type Boolean"
    } else if (type == "date") {
        message = "value must be of type Date"
    } else if (type == "embedded") {
        message = "value must be a object o colection"
    } else if (type == "DuplicatedKeyValue") {
        message = "value must be unique"
    } else if (type == "required") {
        message = message.replace("Path", "Field")
    } else if (type == "Invalid UUID") {
        message = "the " + path + " value must be a valid uuid"
    }
    return message
}

function extractField(message) {
    return message.substring(message.indexOf(":") + 2, message.lastIndexOf(":"))
}

var unexpectedError = function (error, req) {
    req.body.errorReported = JSON.stringify(error.toString());
    return errorFormat("Unexpected Error", error.toString(), null, null, "Error on partner", req.id)
};

const fieldParser = (key, fields) => ({
    field: key,
    value: fields.length > 0 ? fields[key].join(' ') : fields[key],
    issue: 'Field validation error'
})

const errorHandler = function (error, req) {
    console.log(error)
    if (error instanceof mongoose.Error)
        return mongoErrorCather(error, req.id);
    if (error.isAxiosError || (error.response && error.response.status >= 400)) {
        if (error.response.status == 401)
            return errorFormat('Unauthorized', 'Invalid credentials', "AUTH Credentials", undefined, 'Invalid AUTH credentials', req.id);
        if (error.response.data.hasOwnProperty('code')
            && error.response.data.hasOwnProperty('message')
            && error.response.data.hasOwnProperty('source'))
            return errorFormat('Invalid Format', 'Auth returned error', fieldParser(error.response.data.source), undefined, error.response.data.message)
        if (error.response.data.name && error.response.data.message && error.response.data.details)
            return error.response.data;
        if (error.response.data) {
            return errorFormat('TypeError', 'Auth returned error', Object.keys(error.response.data).map(x => fieldParser(x, error.response.data)), undefined, error.response.data.message)

        }
        // return error.response.data;
    }
    if (error.hasOwnProperty('name')
        && error.hasOwnProperty('message')
        && error.hasOwnProperty('details'))
        return error
    if (error.message && error.message.includes("Invalid Credentials"))
        return errorFormat('Unauthorized', 'Invalid credentials', "AUTH Credentials", undefined, 'Invalid AUTH credentials', req.id);
    if (error.message && error.message.includes("Unexpected token a in JSON"))
        return errorFormat("Invalid Format", "Wrong format of json", undefined, undefined, "Value of json can not be parse", req.id);

    return unexpectedError(error, req)
};

module.exports = {
    errorFormat,
    mongoErrorCather,
    errorHandler
}
