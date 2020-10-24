import { parse } from 'marked'
import type { MarkdownParser } from './markdown-parser'
import type { MarkdownParserOutput } from './markdown-parser-output'

/**
 * Parses markdown to HTML tags
 */
export class MarkdownParserHTML implements MarkdownParser {
  parse(markdownContent: string): MarkdownParserOutput {
    return {
      parsedContent: parse(markdownContent),
      dependencies: {}
    }
  }
}
