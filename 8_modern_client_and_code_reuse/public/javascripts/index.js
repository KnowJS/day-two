$(document).ready(function () {
	var shoe = require('shoe');
	var dnode = require('dnode');

	var stream = shoe('/dnode');

	var d = dnode();
	d.on('remote', function (remote) {
		remote.getUptime(function (err, uptime) {
	    console.log('server uptime is ' + uptime);
			remote.log('client just queried server uptime');
	  });
	});
	d.pipe(stream).pipe(d);
});
