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
export default (dir: string, addFile: AddFileFunction, ignore: string[]  = []): void