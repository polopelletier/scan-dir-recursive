
const utils = require("./utils");
const DIR = utils.DIR;
const IGNORED = utils.IGNORED;

describe("promise", function() {

	describe("absolute", function(){
		const scanDirRecursive = requireSrc("promise");

		const accumulator = utils.createAccumulator();

		beforeEach(function(){
			accumulator.reset();
		});

		it("Is function", function(){
			assert.isFunction(scanDirRecursive);
		});

		it("Can list all files recursively", function(done) {
			scanDirRecursive(DIR)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch();
					done();
				});
		});

		it("Can ignore some files", function(done) {
			scanDirRecursive(DIR, IGNORED)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch(true);
					done();
				});
		});
	});

	describe("relative", function(){
		const scanDirRecursive = requireSrc("promise/relative");

		const accumulator = utils.createAccumulator(false);

		beforeEach(function(){
			accumulator.reset(false);
		});

		it("Is function", function(){
			assert.isFunction(scanDirRecursive);
		});

		it("Can list all files recursively", function(done) {
			scanDirRecursive(DIR)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch();
					done();
				});
		});

		it("Can ignore some files", function(done) {
			scanDirRecursive(DIR, IGNORED)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch(true);
					done();
				});
		});
	});
});