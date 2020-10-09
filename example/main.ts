import path from 'path'
import { MarkdownTranspiler, FileCreatorSvelte3, FileCreatorVue2TypescriptClass } from '@gabio/markdown-transpiler'

const inputPattern = path.resolve(__dirname, './inputs') + '/**/*.md'
const outputDir = path.resolve(__dirname, './outputs')

const htmlMarkdownTranspiler = new MarkdownTranspiler()

const svelteMarkdownTranspiler = new MarkdownTranspiler({
  fileCreator: new FileCreatorSvelte3()
})
const vueMarkdownTranspiler = new MarkdownTranspiler({
  fileCreator: new FileCreatorVue2TypescriptClass()
})

htmlMarkdownTranspiler.transpileFiles(inputPattern, outputDir)
svelteMarkdownTranspiler.transpileFiles(inputPattern, outputDir)
vueMarkdownTranspiler.transpileFiles(inputPattern, outputDir)
