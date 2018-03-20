/**
 * List all files recursively in the specified directory
 * @param {string}      scanDirRecursive.dir - Path to the directory
 * @param {AddFileFunction} scanDirRecursive.addFile - Function called every time a file is found
 * @param {string[] =   []} scanDirRecursive.ignore - List of files to ignore
 */
declare function scanDirRecursive(dir: string, ignore?: string[]): string[];
export = scanDirRecursive;