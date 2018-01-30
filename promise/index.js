const scanDirRecursive = require("../async");

module.exports = function(dir, ignore/* = []*/){
	if(ignore == undefined) ignore = [];

	return new Promise(function(resolve){
		scanDirRecursive(dir, resolve, ignore)
	});
}