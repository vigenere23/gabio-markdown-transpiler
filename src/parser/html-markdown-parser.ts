import { MarkdownParser } from './markdown-parser'
import { parse } from 'marked'

export class HTMLMarkdownParser implements MarkdownParser {
  dependencies = {}

  parse(markdownContent: string): string {
    return parse(markdownContent)
  }
}
