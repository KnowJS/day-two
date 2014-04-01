
/**
 * Module dependencies.
 */

var log = require('./lib/log');

log.info('starting knowjs!');

var auth = require('./lib/auth');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var nconf = require('nconf');

log.debug('loading config');

nconf
	.argv()
	.env()
	.file({ file: path.join(__dirname, 'config.json') });

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.logger());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(auth.passport.initialize());
app.use(auth.passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// apply auth routes
auth.routes(app);

app.get('/resize', routes.upload);
app.post('/resize', routes.resize);
app.get('/', auth.ensureAuthenticated, routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
	log.info('Express server listening on port ' + app.get('port'));
});
