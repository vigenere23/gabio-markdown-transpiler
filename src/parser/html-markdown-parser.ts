import { MarkdownParser } from './markdown-parser'
import { parse } from 'marked'

export class HTMLMarkdownParser implements MarkdownParser {
  dependencies = {}

  toVueTemplate(markdownContent: string): string {
    return parse(markdownContent)
  }
}
