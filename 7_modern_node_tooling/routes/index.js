var kresize = require('knowjs-resize');
var nconf = require('nconf');

exports.index = function (req, res) {
  res.render('index', { title: 'Express' });
};

exports.upload = function (req, res) {
  res.render('upload', { title: 'Express' });
};

exports.resize = function (req, res, next) {
	var x = nconf.get('resize:x');
	var y = nconf.get('resize:y');
  // the uploaded file can be found as `req.files.image` 
  kresize(req.files.image.path, x, y, function (err, stream) {
    if (err) next(err);
    stream.pipe(res);
  });
};
