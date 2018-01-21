
const utils = require("./utils");
const DIR = utils.DIR;
const IGNORED = utils.IGNORED;

describe("sync", function() {

	describe("absolute", function(){
		const scanDirRecursive = requireSrc("sync");

		const accumulator = utils.createAccumulator();

		beforeEach(function(){
			accumulator.reset();
		});

		it("Is function", function(){
			assert.isFunction(scanDirRecursive);
		});

		it("Can list all files recursively", function() {
			scanDirRecursive(DIR, accumulator.setFiles);
			accumulator.assertMatch();
		});

		it("Can ignore some files", function() {
			scanDirRecursive(DIR, accumulator.setFiles, IGNORED);
			accumulator.assertMatch(true);
		});
	});

	describe("relative", function(){
		const scanDirRecursive = requireSrc("sync/relative");

		const accumulator = utils.createAccumulator(false);

		beforeEach(function(){
			accumulator.reset(false);
		});

		it("Is function", function(){
			assert.isFunction(scanDirRecursive);
		});

		it("Can list all files recursively", function() {
			scanDirRecursive(DIR, accumulator.setFiles);
			accumulator.assertMatch();
		});

		it("Can ignore some files", function() {
			scanDirRecursive(DIR, accumulator.setFiles, IGNORED);
			accumulator.assertMatch(true);
		});
	});
});