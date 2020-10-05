import { Dependencies } from '../dependencies'
import { ImportsCreator } from './imports-creator'

export abstract class FileCreator {
  private importsCreator: ImportsCreator

  constructor() {
    this.importsCreator = new ImportsCreator()
  }

  create(parsedMarkdown: string, dependencies: Dependencies, filename: string): string {
    const dependenciesImports = this.importsCreator.createImports(dependencies)
    const fileContent = this.wrapParsedContent(parsedMarkdown, dependenciesImports, filename)
    return fileContent
  }

  protected abstract wrapParsedContent(parsedMarkdown: string, imports: string, fileName: string): string
  public abstract get fileExtension(): string

  protected getComponentName(filename: string): string {
    return (
      filename
        .split('-')
        .map((filenamePart) => filenamePart[0].toUpperCase() + filenamePart.slice(1))
        .join('') || ''
    )
  }
}
