import glob from 'glob'
import fs from 'fs'
import path from 'path'
import type { MarkdownParser } from '../parser/markdown-parser'
import type { FileCreator } from '../file-creator/file-creator'
import { MarkdownTranspilerOptions } from './markdown-transpiler-options'
import { MarkdownParserHTML } from '../parser/markdown-parser-html'
import { FileCreatorHTML } from '../file-creator/file-creator-html'
import { ensureDirectoryExistence } from '../utils/file'
import { randomString } from '../utils/strings'

/**
 * The main class to create an HTML-like file from a markdown file.
 */
export class MarkdownTranspiler {
  private parser: MarkdownParser
  private fileCreator: FileCreator

  /**
   * @param options Provides implementation details.
   *  If an implementation is not provided, will default to plain HTML generation.
   *  Other options may appear in the future.
   */
  constructor(options?: MarkdownTranspilerOptions) {
    this.parser = options?.parser || new MarkdownParserHTML()
    this.fileCreator = options?.fileCreator || new FileCreatorHTML()
  }

  /**
   * Transpiles files in batch (from file to file).
   * @param inputPattern A glob pattern for feeding input markdown files.
   * @param outputDir A single directory to output transpiled files.
   *  Note that the folder structure will be flatten.
   *  The output filenames will match the input ones.
   */
  async transpileFiles(inputPattern: string, outputDir: string): Promise<void> {
    return new Promise((resolve, reject) => {
      ensureDirectoryExistence(outputDir)

      glob(inputPattern, (error, inputPaths) => {
        if (error) return reject(error)

        inputPaths.forEach((inputPath) => {
          fs.readFile(inputPath, (error, markdownContent) => {
            if (error) return reject(error)

            const filename = this.getFileName(inputPath)
            const file = this.transpileText(markdownContent.toString(), filename)
            const outputPath = path.join(outputDir, filename + this.fileCreator.fileExtension)

            fs.writeFile(outputPath, file, (error) => {
              if (error) return reject(error)

              return resolve()
            })
          })
        })
      })
    })
  }

  /**
   * Returns transpiled file content (from string to string).
   * @param markdownContent The markdown content to be transpiled.
   * @param identifier (optional) Used for naming the component (if needed).
   *  If not provided, a random string will be generated.
   */
  transpileText(markdownContent: string, identifier?: string): string {
    if (!identifier) {
      identifier = randomString(16)
    }

    const parsedMarkdown = this.parser.parse(markdownContent)
    const file = this.fileCreator.create(parsedMarkdown, this.parser.getDependencies(), identifier)

    return file
  }

  private getFileName(filepath: string): string {
    return path.basename(filepath).split('.').shift()!
  }
}
