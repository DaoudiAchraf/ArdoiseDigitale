var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./config/db');

var budgetsRouter = require('./routes/budgets');
var usersRouter = require('./routes/transactions');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Connect database
connectDB();

app.use('/budgets', budgetsRouter);
app.use('/users', usersRouter);

module.exports = app;
