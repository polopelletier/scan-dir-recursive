const minimatch = require("minimatch");

module.exports = function(filename, ignore) {
	const match = [];

	var current;
	for(var i = 0; i < ignore.length; i++){

		current = ignore[i];

		if(filename === current){
			// Absolute path match
			return true;
		}else if(filename.endsWith(current)){
			// Relative path match
			return true;
		}else if(minimatch(filename, current)){
			// Glob match
			return true;
		}
	}
	return false;
}