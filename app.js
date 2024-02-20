var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {
  Configs
} = require('./modules/index')

var viewsRouter = require('./routes/views');
var productsRouter = require('./routes/products')
var paymentRouter = require('./routes/payment')

const {
  connectToDatabase
} = require('./modules/database');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRouter);
app.use('/products', productsRouter);
app.use('/payment', paymentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(Configs.port, async () => {
  await connectToDatabase("You are good to go!")
  console.log(`Server is now listening on port ${Configs.port}`)
})
module.exports = app;