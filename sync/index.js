const path = require("path");
const fs = require("fs");

const shouldIgnore = require("../utils/shouldIgnore");

function scanDirRecursive(dir, addFile, ignore/* = []*/) {
	if(ignore == undefined) ignore = [];
	
	const files = fs.readdirSync(dir);

	files.forEach(function(file) {
		const filename = path.resolve(dir, file);

		if(shouldIgnore(filename, ignore)){
			return; // Skip if in ignore list
		}

		const stats = fs.statSync(filename);

		if(stats.isDirectory()){
			scanDirRecursive(filename, addFile, ignore);
		}else{
			addFile(filename);
		}
	});
}

module.exports = function(dir, ignore/* = []*/){
	if(ignore == undefined) ignore = [];

	const files = [];

	function addFile(filename){
		files.push(filename);
	}

	scanDirRecursive(dir, addFile, ignore);

	return files;
};
