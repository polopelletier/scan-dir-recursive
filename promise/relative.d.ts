/**
 * List all files recursively in the specified directory
 * @param {string}      dir - Path to the directory
 * @param {string[] =   []} ignore - List of files to ignore
 * @returns A promise that resolve with a list of all filenames found
 */
declare function scanDirRecursive(dir: string, ignore?: string[]): Promise<string[]>;
export = scanDirRecursive;