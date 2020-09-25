import glob from 'glob'
import fs from 'fs'
import path from 'path'
import { MarkdownTranspilerOptions } from './markdown-transpiler-options'
import { ensureDirectoryExistence } from '../utils/file'

export class MarkdownTranspiler {
  constructor(private options: MarkdownTranspilerOptions) {}

  async startCompilation(): Promise<void> {
    return new Promise((resolve, reject) => {
      // TODO keep file tree
      ensureDirectoryExistence(this.options.outputDir)

      glob(this.options.inputPattern, (error, inputPaths) => {
        if (error) return reject(error)

        inputPaths.forEach((inputPath) => {
          fs.readFile(inputPath, (error, markdownContent) => {
            if (error) return reject(error)

            const parsedMarkdown = this.options.parser.toVue(markdownContent.toString())
            const filename = this.getFileName(inputPath)
            const vueFile = this.options.fileCreator.create(parsedMarkdown, this.options.parser.dependencies, filename)

            const outputPath = path.join(this.options.outputDir, filename + '.vue')

            fs.writeFile(outputPath, vueFile, (error) => {
              if (error) return reject(error)

              return resolve()
            })
          })
        })
      })
    })
  }

  private getFileName(filepath: string): string {
    return path.basename(filepath).split('.').shift()!
  }
}
