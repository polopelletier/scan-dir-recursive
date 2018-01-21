
const utils = require("../test/utils");
const DIR = utils.DIR;
const IGNORED = utils.IGNORED;
const IGNORED_GLOB = utils.IGNORED_GLOB;

describe("async", function() {

	describe("absolute", function(){
		const scanDirRecursive = require("./index");

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

		it("Can ignore some files with glob pattern", function(done) {
			function onComplete(files){
				accumulator.setFiles(files);
				accumulator.assertMatch(true);
				done();
			}

			scanDirRecursive(DIR, onComplete, IGNORED_GLOB);
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

		it("Can ignore some files with glob pattern", function(done) {
			function onComplete(files){
				accumulator.setFiles(files);
				accumulator.assertMatch(true);
				done();
			}

			scanDirRecursive(DIR, onComplete, IGNORED_GLOB);
		});
	});
});