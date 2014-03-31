var gm = require('gm')
  , imageMagick = gm.subClass({ imageMagick: true });

module.exports = function (path, width, height, cb) {
	if (!path) throw new Error('you must specify a path!');
	if (!width) throw new Error('you must specify a width!');
	if (!height) throw new Error('you must specify a height!');
	if (!cb) throw new Error('you must specify a callback!');
  imageMagick(path)
    .resize(width, height)
    .stream('png', function (err, stdout, stderr) {
      if (err) return cb(err);
      cb(null, stdout);  
    });
}
