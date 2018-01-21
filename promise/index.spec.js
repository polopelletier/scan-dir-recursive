
const utils = require("../test/utils");
const DIR = utils.DIR;
const IGNORED = utils.IGNORED;
const IGNORED_GLOB = utils.IGNORED_GLOB;

describe("promise", function() {

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
			scanDirRecursive(DIR)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch();
					done();
				}).catch(function(err){
					done(err);
				});
		});

		it("Can ignore some files", function(done) {
			scanDirRecursive(DIR, IGNORED)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch(true);
					done();
				}).catch(function(err){
					done(err);
				});
		});

		it("Can ignore some files with glob pattern", function(done) {
			scanDirRecursive(DIR, IGNORED_GLOB)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch(true);
					done();
				}).catch(function(err){
					done(err);
				});
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
			scanDirRecursive(DIR)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch();
					done();
				}).catch(function(err){
					done(err);
				});
		});

		it("Can ignore some files", function(done) {
			scanDirRecursive(DIR, IGNORED)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch(true);
					done();
				}).catch(function(err){
					done(err);
				});
		});

		it("Can ignore some files with glob pattern", function(done) {
			scanDirRecursive(DIR, IGNORED_GLOB)
				.then(function(files) {
					accumulator.setFiles(files);
					accumulator.assertMatch(true);
					done();
				}).catch(function(err){
					done(err);
				});
		});
	});
});