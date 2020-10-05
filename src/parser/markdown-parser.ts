import { Dependencies } from '../dependencies'

export interface MarkdownParser {
  parse(markdownContent: string): string
  dependencies: Dependencies
}
