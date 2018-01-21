[![NPM version](https://badge.fury.io/js/scan-dir-recursive.svg)](http://badge.fury.io/js/scan-dir-recursive)

# Scan-dir-recursive

Scan-dir-recursive is a small library that allows you to list all files in a directory recursively with the possibility of ignoring some.

## Installation
```bash
npm install scan-dir-recursive
```

## Getting started
```javascript
const scan = require("scan-dir-recursive");

scan(__dirname, function(files){
	console.log("Files:\n", files.join("\n"));
});
```

## Api documentation

### Async or sync
By default, a scan is done asynchronously but it is possible to do them synchronously too.
```javascript

// Async
const scanAsync = require("scan-dir-recursive");
// or
const scanAsync = require("scan-dir-recursive/async");

// Sync
const scanSync = require("scan-dir-recursive/sync");

```

#### scanDirRecursive(directory, done, [ignore])
- `directory:String` - Absolute path to the directory to scan
- `done:Function` - Function to call when the scan is complete. Receive an Array of filenames as an argument
- `[ignore:Array]` - An Array of absolute path to ignore

### Promise
It is possible to use the async version with a javascript `Promise`.
```javascript
	const scan = require("scan-dir-recursive/promise");

	scan(__dirname, IGNORED)
		.then(function(files){
			console.log("Files:\n", files.join("\n"));
		});
```
Notice that the `done` parameter is omitted since it is replaced by the `Promise`.

#### scanDirRecursive(directory, [ignore])
- `directory:String` - Absolute path to the directory to scan
- `[ignore:Array]` - An Array of absolute path to ignore

Returns a `Promise` that receive an Array of filenames when it resolve

### Absolute path or relative path
By default, the files are listed with their absolute path. It is possible to get a path relative to the specified directory by using the _relative_ version of the script.
```javascript
	const DIR = "/home/myUser/myProject/src";

	// Absolute path

	const absolute = require("scan-dir-recursive");

	absolute(DIR, function(files){
		console.log(files.join("\n"));
		// "/home/myUser/myProject/src/file.js"
		// "/home/myUser/myProject/src/someDir/other.js"
	});

	// Relative path

	const relative = require("scan-dir-recursive/relative");

	relative(DIR, function(files){
		console.log(files.join("\n"));
		// "file.js"
		// "someDir/other.js"
	});

```


### Ignoring files
You can specify an Array of filenames to ignore in the results.
Currently, the filenames need to be absolute paths

Assuming we have the following directory structure in `/home/myUser/myProject/src`
```
src/
   |- a.js 
   |- b
   |  |-- b1/
   |  |     |-- b1.js
   |  |-- b2/
   |        |-- b2.js
```

When we run the following, the `b/b1` branch and all its content will be ignored.
```javascript
const path = require("path");
const scan = require("scan-dir-recursive");

const DIR = "/home/myUser/myProject/src";

const IGNORED = [
	path.resolve(DIR, "b/b1")
];

function onComplete(files){
	console.log(files);
}

scan(DIR, onComplete, IGNORED);
// [
//	 "a.js",
//	 "b/b.js",
//	 "b/b2/b2.js"
// ]

// Ignored: "b/b1/b1.js",

```

#### Improving on ignore
Adding the possibility to provide a pattern, a predicate or a regular expression would be a great improvement.