const path = require("path");

const DIR = path.resolve(__dirname, "content");

module.exports.DIR = DIR;

const FILES = [
	"a.js",
	"b/b.js",
	"b/b1/b1.js",
	"b/b2/b2.js"
];

const FILES_IGNORED = [
	"a.js",
	"b/b.js",
	// Ignored: "b/b1/b1.js",
	"b/b2/b2.js"
];

module.exports.IGNORED = [
	path.resolve(DIR, "b/b1")
];

module.exports.createAccumulator = function(absolute = true) {
	var files;

	return {
		reset: function(){
			files = [];
		},

		setFiles: function(provided){
			files = provided;
		},
		assertMatch: function(hasIgnore = false){
			
			var expected = hasIgnore ? FILES_IGNORED : FILES;
			if(absolute){
				expected = expected.map(function(filename){
					return path.resolve(DIR, filename);
				});
			}

			assert.deepEqual(files.sort(), expected);
		}
	};		
}