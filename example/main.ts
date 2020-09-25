import path from 'path'
import { MarkdownTranspiler } from '../src/transpiler/markdown-transpiler'
import { TypescriptClassVueFileCreator } from '../src/file-creator/typescript-class-vue-file-creator'
import { HTMLMarkdownParser } from '../src/parser/html-markdown-parser'

const inputPattern = path.resolve(__dirname, './inputs') + '/**/*.md'
const outputDir = path.resolve(__dirname, './outputs')

const markdownCompiler = new MarkdownTranspiler({
  inputPattern,
  outputDir,
  parser: new HTMLMarkdownParser(),
  fileCreator: new TypescriptClassVueFileCreator()
})

markdownCompiler.startCompilation()
