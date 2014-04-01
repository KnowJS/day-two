var debug = require('debug');
var util = require('util');

var levels = ['debug', 'info', 'warn', 'error'];

levels.forEach(function (level) {
	var dbg = debug(level);
	module.exports[level] = function () {
		var args = Array.prototype.slice.call(arguments);
		dbg(util.format.apply(this, args));
	}
});
