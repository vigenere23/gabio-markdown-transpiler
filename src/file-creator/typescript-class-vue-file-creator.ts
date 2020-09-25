import { VueDependencies } from '../vue-dependencies'
import { ImportsCreator } from './imports-creator'
import { VueFileCreator } from './vue-file-creator'

export class TypescriptClassVueFileCreator implements VueFileCreator {
  private importsCreator: ImportsCreator

  constructor() {
    this.importsCreator = new ImportsCreator()
  }

  create(parsedMarkdown: string, dependencies: VueDependencies): string {
    const imports = this.importsCreator.createImports(dependencies)
    console.log(imports)
    return '' // TODO
    // create Vue file with dependencies and template
  }
}
