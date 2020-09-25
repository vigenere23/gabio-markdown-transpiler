import { VueDependencies } from '@/vue-dependencies'
import { ImportsCreator } from './imports-creator'

export abstract class VueFileCreator {
  private importsCreator: ImportsCreator

  constructor() {
    this.importsCreator = new ImportsCreator()
  }

  create(parsedMarkdown: string, dependencies: VueDependencies, filename: string): string {
    const dependenciesImports = this.importsCreator.createImports(dependencies)
    const fileContent = this.wrapVueContent(parsedMarkdown, dependenciesImports, filename)
    return fileContent
  }

  protected abstract wrapVueContent(parsedMarkdown: string, imports: string, fileName: string): string
  protected abstract get additionalImports(): string

  protected getComponentName(filename: string): string {
    return (
      filename
        .split('-')
        .map((filenamePart) => filenamePart[0].toUpperCase() + filenamePart.slice(1))
        .join('') || ''
    )
  }
}
