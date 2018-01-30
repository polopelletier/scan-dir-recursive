const scanDirRecursive = require("../async/relative");

module.exports = function(dir, ignore/* = []*/){
	if(ignore == undefined) ignore = [];
	
	return new Promise(function(resolve){
		scanDirRecursive(dir, resolve, ignore)
	});
}