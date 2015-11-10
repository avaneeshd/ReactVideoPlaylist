var request = require('request');
var expect = require('Chai').expect;
var server = '../build/server/server';

describe('server response', function () {
	before(function () {
		//server.listen(3000);
	});

	it('should return 200', function (done) {
		var options = {
			url: 'http://localhost:3000',
			headers: {
				'Content-Type': 'text/plain'
			}
		};
		request.get(options, function (err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
		});
	});


	after(function () {
		//server.close();
	});
});
