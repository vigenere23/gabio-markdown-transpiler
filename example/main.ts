import path from 'path'
import { MarkdownTranspiler, TypescriptClassVueFileCreator, HTMLMarkdownParser } from '@gabio/markdown-vue-transpiler'

const inputPattern = path.resolve(__dirname, './inputs') + '/**/*.md'
const outputDir = path.resolve(__dirname, './outputs')

const markdownCompiler = new MarkdownTranspiler({
  inputPattern,
  outputDir,
  parser: new HTMLMarkdownParser(),
  fileCreator: new TypescriptClassVueFileCreator()
})

markdownCompiler.startCompilation()
