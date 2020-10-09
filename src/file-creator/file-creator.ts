import type { ImportsCreator } from '../imports-creator/imports-creator'
import type { Dependencies } from '../utils/dependencies'
import { ImportsCreatorES6Module } from '../imports-creator/imports-creator-es6-module'

/**
 * File creation abstraction. To be extended with concrete implementations.
 */
export abstract class FileCreator {
  /**
   * @param importsCreator The imports creator to use for parsing the dependency tree.
   */
  constructor(protected importsCreator: ImportsCreator = new ImportsCreatorES6Module()) {}

  /**
   * Creates a file content from the parsed generic parts.
   * @param parsedMarkdown The markdown parsed from a `MarkdownParser`.
   * @param dependencies The dependencies to pass to the `ImportsCreator`.
   * @param identifier A (preferably) unique identifier that may be used for the component's name.
   */
  create(parsedMarkdown: string, dependencies: Dependencies, identifier: string): string {
    const parsedDependencies = this.createImports(dependencies)
    const fileContent = this.wrapParsedContent(parsedMarkdown, parsedDependencies, identifier)
    return fileContent
  }

  /**
   * Concrete implementation of the `.create()` method.
   * @param parsedMarkdown The markdown parsed from a `MarkdownParser`.
   * @param dependencies The dependencies to pass to the `ImportsCreator`.
   * @param identifier A (preferably) unique identifier that may be used for the component's name.
   */
  protected abstract wrapParsedContent(parsedMarkdown: string, parsedDependencies: string, identifier: string): string

  protected abstract get additionalDependencies(): Dependencies

  /**
   * Concrete implementation for getting the file extension of the newly created file.
   */
  public abstract get fileExtension(): string

  protected createImports(dependencies: Dependencies): string {
    return this.importsCreator.createImports({
      ...dependencies,
      ...this.additionalDependencies
    })
  }

  /**
   * Generates a PascalCase component name based on the identifier
   * @param identifier A (preferably) unique identifier that may be used for the component's name.
   */
  protected getComponentName(identifier: string): string {
    return (
      identifier
        .split('-')
        .map((filenamePart) => filenamePart[0].toUpperCase() + filenamePart.slice(1))
        .join('') || ''
    )
  }
}
