
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
			const files = scanDirRecursive(DIR);
			accumulator.setFiles(files);
			accumulator.assertMatch();
		});

		it("Can ignore some files", function() {
			const files = scanDirRecursive(DIR, IGNORED);
			accumulator.setFiles(files);
			accumulator.assertMatch(true);
		});

		it("Can ignore some files with glob pattern", function() {
			const files = scanDirRecursive(DIR, IGNORED_GLOB);
			accumulator.setFiles(files);
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
			const files = scanDirRecursive(DIR);
			accumulator.setFiles(files);
			accumulator.assertMatch();
		});

		it("Can ignore some files", function() {
			const files = scanDirRecursive(DIR, IGNORED);
			accumulator.setFiles(files);
			accumulator.assertMatch(true);
		});

		it("Can ignore some files with glob pattern", function() {
			const files = scanDirRecursive(DIR, IGNORED_GLOB);
			accumulator.setFiles(files);
			accumulator.assertMatch(true);
		});
	});
});