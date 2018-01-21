const minimatch = require("minimatch");

const chalk = require("chalk");

module.exports = function(filename, ignore) {
	const match = [];

	var current;
	for(var i = 0; i < ignore.length; i++){

		current = ignore[i];


		if(filename === current){
			// Absolute path match
			logCurrent(filename, current, chalk.red);
			return true;
		}else if(filename.endsWith(current)){
			// Relative path match
			logCurrent(filename, current, chalk.red);
			return true;
		}else if(minimatch(filename, current)){
			// Glob match
			logCurrent(filename, current, chalk.red);
			return true;
		}
		logCurrent(filename, current, chalk.green);
	}
	return false;
}

function logCurrent(filename, current, color){
	const parts = filename.split("scan-dir-recursive");
	//console.log(color(parts[parts.length - 1]), color(current))
}