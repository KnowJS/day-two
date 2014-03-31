// Sample mocha test file

/* describe blocks allow you to have different
 * levels of tests for different contexts, such
 * as at a module, class, or function level. */
describe('module_to_test', function () {
	beforeEach(function (done) {
		/* optional done parameters are callbacks
		 * which tell mocha when a test is finished.
		 * this helps mocha when tests include a call
		 * to something asynchronous */
		setTimeout(function () {
			console.log('beforeEach');
			done();
		}, 10);
	});
	describe('#function_on_module', function () {
		it('should do some expected behavior', function () {
			/* tests fail when they throw an error (or time
			 * out, in the case of when using a done() 
			 * function. not throwing an error and not timing
			 * out means the test was successful. so this one
			 * will pass! */
			console.log('#function_on_module');
		})
	})
})
