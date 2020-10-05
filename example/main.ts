import path from 'path'
import { MarkdownTranspiler, VueTypescriptClassFileCreator, HTMLMarkdownParser } from '@gabio/markdown-transpiler'

const inputPattern = path.resolve(__dirname, './inputs') + '/**/*.md'
const outputDir = path.resolve(__dirname, './outputs')

const markdownCompiler = new MarkdownTranspiler({
  inputPattern,
  outputDir,
  parser: new HTMLMarkdownParser(),
  fileCreator: new VueTypescriptClassFileCreator()
})

markdownCompiler.startCompilation()
