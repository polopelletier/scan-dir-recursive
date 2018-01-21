
const utils = require("./utils");
const DIR = utils.DIR;
const IGNORED = utils.IGNORED;

describe("async", function() {

	describe("absolute", function(){
		const scanDirRecursive = requireSrc("async");

		const accumulator = utils.createAccumulator();

		beforeEach(function(){
			accumulator.reset();
		});

		it("Is function", function(){
			assert.isFunction(scanDirRecursive);
		});

		it("Can list all files recursively", function(done) {
			function onComplete(files){
				accumulator.setFiles(files);
				accumulator.assertMatch();
				done();
			}

			scanDirRecursive(DIR, onComplete);
		});

		it("Can ignore some files", function(done) {
			function onComplete(files){
				accumulator.setFiles(files);
				accumulator.assertMatch(true);
				done();
			}

			scanDirRecursive(DIR, onComplete, IGNORED);
		});
	});

	describe("relative", function(){
		const scanDirRecursive = requireSrc("async/relative");

		const accumulator = utils.createAccumulator(false);

		beforeEach(function(){
			accumulator.reset(false);
		});

		it("Is function", function(){
			assert.isFunction(scanDirRecursive);
		});

		it("Can list all files recursively", function() {
			function onComplete(files){
				accumulator.setFiles(files);
				accumulator.assertMatch();
				done();
			}

			scanDirRecursive(DIR, onComplete);
		});

		it("Can ignore some files", function() {
			function onComplete(files){
				accumulator.setFiles(files);
				accumulator.assertMatch(true);
				done();
			}

			scanDirRecursive(DIR, onComplete, IGNORED);
		});
	});
});