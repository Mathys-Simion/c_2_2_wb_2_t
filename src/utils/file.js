import { dirname } from 'path'
import { fileURLToPath } from 'url'
global.__basedir = `${dirname(fileURLToPath(import.meta.url))}/../..`
export const filePath = relativePath => `${global.__basedir}${relativePath}`