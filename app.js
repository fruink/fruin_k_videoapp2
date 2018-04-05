//app
var path = require('path');
var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var handlebars = require('handlebars');
var xhb  = require('express-handlebars');
var index = require('./routes/index');//routes to pages in app
var content = require('./routes/content');
var movies = require('./routes/movies');

var app = express();

app.set('views', path.join(__dirname, 'views'));//views setup
app.engine('handlebars', xhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);//direction
app.use('/content', content);//direction
app.use('/movies', movies);//direction


// errors
app.use(function(err, req, res, next) {
  //error msg
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render to the error page in case an error occurs :(
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
