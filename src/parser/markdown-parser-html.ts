import { parse } from 'marked'
import type { MarkdownParser } from './markdown-parser'
import type { Dependencies } from '../utils/dependencies'

/**
 * Parses markdown to HTML tags
 */
export class MarkdownParserHTML implements MarkdownParser {
  getDependencies(): Dependencies {
    return {}
  }

  parse(markdownContent: string): string {
    return parse(markdownContent)
  }
}
