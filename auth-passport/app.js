var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');

//bd
require('dotenv').config();
require('./config/database');
require('./config/passport')(passport);
require('./models/agent');

var indexRouter = require('./routes/index');
var agentsRouter = require('./routes/agents');
const userRouter = require('./routes/userAuth');
const authRouteClt = require('./routes/clientAuth');
const authRouteM = require('./routes/merchantAuth');
const _2fa = require('./routes/2fa');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/api/agent', agentsRouter);
app.use('/api/client', authRouteClt);
app.use('/api/merchant', authRouteM);
app.use('/api/login', userRouter);

app.use('/2fa', _2fa);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
