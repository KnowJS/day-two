var kresize = require('knowjs-resize');

exports.index = function (req, res) {
  res.render('index', { title: 'Express' });
};

exports.upload = function (req, res) {
  res.render('upload', { title: 'Express' });
}

exports.resize = function (req, res, next) {
  // the uploaded file can be found as `req.files.image` 
  console.log('resizing %s', req.files.image.path);
  kresize(req.files.image.path, 150, 150, function (err, stream) {
    if (err) next(err);
    stream.pipe(res);
  });
};
