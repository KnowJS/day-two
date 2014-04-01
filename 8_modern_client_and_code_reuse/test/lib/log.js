var should = require('should');
var log = require('../../lib/log');

describe('log', function () {
	it('should have debug, info, warn, and error funcs', function () {
		log.should.have.property('debug');
		should(typeof log.debug).equal('function');
		log.should.have.property('info');
		should(typeof log.info).equal('function');
		log.should.have.property('warn');
		should(typeof log.warn).equal('function');
		log.should.have.property('error');
		should(typeof log.error).equal('function');
	});
});
