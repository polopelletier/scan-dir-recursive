const scanDirRecursive = require("../async/relative");

module.exports = function(dir, ignore = []){
	return new Promise(function(resolve){
		scanDirRecursive(dir, resolve, ignore)
	});
}