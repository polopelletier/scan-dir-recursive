/// <reference path="./sync/index.d.ts" />
/// <reference path="./sync/relative.d.ts" />

/// <reference path="./async/index.d.ts" />
/// <reference path="./async/index.d.ts" />

/// <reference path="./promise/index.d.ts" />
/// <reference path="./promise/index.d.ts" />

/**
 * Function called every time a file is found
 * @param {string} AddFileFunction.filename - Path to the file found
 */
type AddFileFunction = (filename: string) => void;

/**
 * List all files recursively in the specified directory
 * @param {string}      scanDirRecursive.dir - Path to the directory
 * @param {AddFileFunction} scanDirRecursive.addFile - Function called every time a file is found
 * @param {string[] =   []} scanDirRecursive.ignore - List of files to ignore
 */
type exported = (dir: string, addFile: AddFileFunction, ignore?: string[]) => void;
export = exported;