import path from 'path'
import fs from 'fs'

export function ensureDirectoryExistence(dirname: string) {
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(path.dirname(dirname))
  fs.mkdirSync(dirname)
}
