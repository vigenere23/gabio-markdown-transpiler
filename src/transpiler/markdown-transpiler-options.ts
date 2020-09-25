import { VueFileCreator } from '@/file-creator/vue-file-creator'
import { MarkdownParser } from '@/parser/markdown-parser'

interface MarkdownTranspilerOptionsRequired {
  inputPattern: string
  outputDir: string
  parser: MarkdownParser
  fileCreator: VueFileCreator
}

interface MarkdownTranspilerOptionsOptional {
  // other options to be added
  minify?: boolean
}

export interface MarkdownTranspilerOptions
  extends MarkdownTranspilerOptionsRequired,
    MarkdownTranspilerOptionsOptional {}

export const DEFAULT_MARKDOWN_TRANSPILER_OPTIONS: MarkdownTranspilerOptionsOptional = {
  minify: false
}
