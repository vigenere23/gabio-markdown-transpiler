import type { MarkdownParser } from '../parser/markdown-parser'
import type { FileCreator } from '../file-creator/file-creator'

/**
 * Options for the MarkdownTranspiler constructor
 */
export interface MarkdownTranspilerOptions {
  parser?: MarkdownParser
  fileCreator?: FileCreator
}
