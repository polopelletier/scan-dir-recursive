const scanDirRecursive = require("../async");

module.exports = function(dir, ignore = []){
	return new Promise(function(resolve){
		scanDirRecursive(dir, resolve, ignore)
	});
}