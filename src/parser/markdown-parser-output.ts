import type { Dependencies } from '../utils/dependencies'

export type MarkdownParserOutput = {
  parsedContent: string
  dependencies: Dependencies
}
