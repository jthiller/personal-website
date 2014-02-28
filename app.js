
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , projects = require('./routes/projects')
  // , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , stylus = require('stylus')
  , nib = require('nib');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hjs');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
app.use(app.router);

function compile(str, path) {
  return stylus(str)
    .set('filename', __dirname + '/public')
    .set('compress', false)
    .use(nib());
}
app.use(stylus.middleware({
    src: __dirname + '/public'
  , compile: compile
}));
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/**
 * App routing.
 */
// Core pages
app.get('/', routes.index);
app.get('/about', routes.about);
// app.get('/users', user.list);

// Project pages
app.get('/portfolio', projects.portfolio);
app.get('/letsgoio', projects.letsgoio);

http.createServer(app).listen(app.get('port'), function(){
  console.log('[✔] Express server listening on port ' + app.get('port'));
});
