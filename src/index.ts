type VueDependencyModule = string

type VueDependency = VueDependencyModule[] | { [key: string]: VueDependency }
type VueDependencies = { [key: string]: VueDependency }

const dependencies: VueDependencies = {
  '@vigenere23/gio': ['GioImage', 'GioContent'],
  '@sam123/lib': {
    cst: ['alpha', 'beta']
  }
}

interface MarkdownParser {
  toVueTemplate(markdownContent: string): string
  dependencies: VueDependencies
}

interface MarkdownToVueCompilerOptions {
  inputDir: string
  outputDir: string
  parser: MarkdownParser
}

class VueFileCreator {
  create(vueTemplate: string, dependencies: VueDependencies): string {
    return '' // TODO
    // create Vue file with dependencies and template
  }
}

class MarkdownToVueCompiler {
  // offered class
  constructor(private options: MarkdownToVueCompilerOptions) {}

  startCompilation(): void {
    // TODO
    // for content in inputDir.files
    //   vueTemplate = parser.transformToVue(content)
    //   output = vueFileCreator.create(vueTemplate, compiler.dependencies)
    //   outputs.add(output)
  }
}

//// GIO

class GioMarkdownParser implements MarkdownParser {
  toVueTemplate(markdownContent: string): string {
    return '' // take from gio lib
  }
  dependencies = {
    '@vigenere23/gio': ['GioText', 'GioBodyText', 'etc']
  }
}

//// MAIN

const parser = new GioMarkdownParser()
const toVueCompiler = new MarkdownToVueCompiler({
  inputDir: '../md-articles',
  outputDir: '../articles',
  parser
})

toVueCompiler.startCompilation()
