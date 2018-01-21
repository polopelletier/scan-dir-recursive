const path = require("path");
const fs = require("fs");

const shouldIgnore = require("../utils/shouldIgnore");

function scanDirRecursive(dir, done, ignore = []){
	fs.readdir(dir, function(err, files){
		var i = -1;
		
		var accum = [];

		/* istanbul ignore if */
		if(err != null){
			done(accum);
			return;
		}

		function nextFile(){
			i++;

			if(i < files.length){
				processFile(files[i]);
			}else{
				done(accum);
			}
		}

		function processFile(file){
			const filename = path.resolve(dir, file);

			if(shouldIgnore(filename, ignore)){
				nextFile();
				return; // Skip if in ignore list
			}

			fs.stat(filename, function(err, stats){

				/* istanbul ignore if */
				if(err){
					nextFile();
					return;
				}

				if(stats.isDirectory()){
					scanDirRecursive(filename, function(subDir){
						accum = accum.concat(subDir);
						nextFile();
					}, ignore);
				}else{
					accum.push(filename);
					nextFile();
				}

			});			
		}

		nextFile();
	});
}

module.exports = scanDirRecursive;