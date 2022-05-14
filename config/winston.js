var winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

// define the custom settings for each transport (file, console)
var options = {
    console: {
        level: '',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
// instantiate a new Winston Logger with the settings defined above
const rotateTransport = new DailyRotateFile({
    filename: './logs/%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});

var logger = winston.createLogger({
    transports: [
        rotateTransport,
        // new winston.transports.File({ filename: 'logs/all.log' }),
        // new winston.transports.Console(options.console),
        // new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
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