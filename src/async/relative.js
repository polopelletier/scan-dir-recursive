const path = require("path");

const absolute = require("./index");

module.exports = function(dir, done, ignore = []) {
	
	function onComplete(files){
		files = files.map(function(filename){
			return path.relative(dir, filename);
		});

		done(files);
	}

	absolute(dir, onComplete, ignore);
}