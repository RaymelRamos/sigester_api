var winston = require('winston');

// define the custom settings for each transport (file, console)
var options = {
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
// instantiate a new Winston Logger with the settings defined above
var logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logs/all.log' }),
        new winston.transports.Console(options.console)
      ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message, encoding) {
        logger.info({logGroupName:process.env.LOG_GROUP_NAME,logStreamName:process.env.LOG_GROUP_STREAM,message:message});
    },
};

module.exports = logger;