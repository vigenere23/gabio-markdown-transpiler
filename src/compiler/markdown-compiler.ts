import { MarkdownCompilerOptions } from './markdown-compiler-options'

export class MarkdownCompiler {
  // offered class
  constructor(private options: MarkdownCompilerOptions) {}

  startCompilation(): void {
    const parsedMarkdown = this.options.parser.toVueTemplate('')
    const vueFile = this.options.fileCreator.create(parsedMarkdown, this.options.parser.dependencies)
    // TODO
    // for content in inputDir.files
    //   vueTemplate = parser.transformToVue(content)
    //   output = vueFileCreator.create(vueTemplate, compiler.dependencies)
    //   outputs.add(output)
  }
}
