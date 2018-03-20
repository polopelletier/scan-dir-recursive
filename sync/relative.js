const path = require("path");

const absolute = require("./index");

module.exports = function(dir, ignore/* = []*/) {
	if(ignore == undefined) ignore = [];

	return absolute(dir, ignore)
		.map(function(filename){
			return path.relative(dir, filename);
		});
};
