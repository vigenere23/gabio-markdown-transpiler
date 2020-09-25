import { VueFileCreator } from '../file-creator/vue-file-creator'
import { MarkdownParser } from '../parser/markdown-parser'

interface MarkdownCompilerOptionsRequired {
  inputDir: string
  outputDir: string
  parser: MarkdownParser
  fileCreator: VueFileCreator
}

interface MarkdownCompilerOptionsOptional {
  // other options to be added
  minify?: boolean
}

export interface MarkdownCompilerOptions extends MarkdownCompilerOptionsRequired, MarkdownCompilerOptionsOptional {}

export const DEFAULT_MARKDOWN_COMPILER_OPTIONS: MarkdownCompilerOptionsOptional = {
  minify: false
}
