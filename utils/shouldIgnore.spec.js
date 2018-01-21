const shouldIgnore = require("./shouldIgnore");

describe("utils", function() {
	describe("#shouldIgnore", function(){

		it("Is a function", function(){
			assert.isFunction(shouldIgnore);
		});

		it("Should not ignore if list is empty", function(){
			assert.isFalse(shouldIgnore("src/a.js", []));
		});

		it("Should ignore absolute path", function(){
			const IGNORED = [
				"src/dir2"
			];
			
			assert.isFalse(shouldIgnore("src/dir1", IGNORED));
			assert.isTrue(shouldIgnore("src/dir2", IGNORED));
		});

		it("Should ignore relative path", function(){
			const IGNORED = [
				"dir/sub2"
			];
			
			assert.isFalse(shouldIgnore("src/dir/sub1", IGNORED));
			assert.isTrue(shouldIgnore("src/dir/sub2", IGNORED));
		});

		it("Should ignore glob patterns", function(){
			const IGNORED = [
				"src/dir2/**"
			];
			
			assert.isFalse(shouldIgnore("src/dir1/file.js", IGNORED));
			assert.isTrue(shouldIgnore("src/dir2/file.js", IGNORED));
		});
	});
});