const chai = require("chai");
const path = require("path");

// Init globals
global.assert = chai.assert;

global.requireSrc = function(filename) {
	return require(path.resolve(process.cwd(), "src", filename));
}