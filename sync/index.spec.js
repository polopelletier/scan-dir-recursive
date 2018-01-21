
const utils = require("../test/utils");
const DIR = utils.DIR;
const IGNORED = utils.IGNORED;
const IGNORED_GLOB = utils.IGNORED_GLOB;

describe("sync", function() {

	describe("absolute", function(){
		const scanDirRecursive = require("./index");

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

		it("Can ignore some files with glob pattern", function() {
			scanDirRecursive(DIR, accumulator.setFiles, IGNORED_GLOB);
			accumulator.assertMatch(true);
		});
	});

	describe("relative", function(){
		const scanDirRecursive = require("./relative");

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

		it("Can ignore some files with glob pattern", function() {
			scanDirRecursive(DIR, accumulator.setFiles, IGNORED_GLOB);
			accumulator.assertMatch(true);
		});
	});
});