import path from 'path'
import { MarkdownTranspiler } from '../src/transpiler/markdown-transpiler'
import { TypescriptClassVueFileCreator } from '../src/file-creator/typescript-class-vue-file-creator'
import { GioMarkdownParser } from '../src/parser/gio-markdown-parser'
import { HTMLMarkdownParser } from '../src/parser/html-markdown-parser'
import { RELATIVE_URL_RESOLVER } from './constants'

const inputPattern = path.resolve(__dirname, './inputs') + '/**/*.md'
const outputDir = path.resolve(__dirname, './outputs')

const markdownCompiler = new MarkdownTranspiler({
  inputPattern,
  outputDir,
  parser: new GioMarkdownParser(RELATIVE_URL_RESOLVER),
  fileCreator: new TypescriptClassVueFileCreator()
})

markdownCompiler.startCompilation()
