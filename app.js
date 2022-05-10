var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require("cors");
var { errorHandler, errorFormat } = require('./config/ErrorParser')
require("dotenv").config();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

require("./config/database").connect();

const apiRouter = require('./apiRouter')

var app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// logger
const winston = require("./config/winston");
app.use(morgan("combined", { stream: winston.stream }));
app.use(require("./config/LastLog"));

app.use(async (req, res, next) => {
  req.id = req.headers['x-request-id'];
  if (!req.id)
    req.id = + new Date()
  if (req.url === '/api/v1/auth') {
    next()
  }
  else {
    req.AUTH = req.header("Authorization")
    if (req.AUTH) {
      next()
    }
    else {
        next()
      //res.status(401).json(errorFormat('Unauthorized', 'Invalid credentials', "User Credentials", undefined, 'Invalid user credentials', req.id));
    }
  }
});

// Save Image


app.get('/', (req, res) => { res.send('Sigester client microservice') });

app.use('/api/v1/', apiRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
});
app.use(cors());

//Error Handler
app.use(function (err, req, res, next) {
  const error = errorHandler(err, req);
  console.log(error)
  if (error.name == 'Unauthorized')
    res.status(403).json(error);
  else
    res.status(400).json(error);
});

module.exports = app;
