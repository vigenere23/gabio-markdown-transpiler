import path from 'path'
import fs from 'fs'

/**
 * Creates a complete path to the child directory
 * @param dirname The complete directory path to be created
 */
export function ensureDirectoryExistence(dirname: string) {
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(path.dirname(dirname))
  fs.mkdirSync(dirname)
}
