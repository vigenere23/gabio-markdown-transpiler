import { MarkdownParser } from './markdown-parser'
import { parse } from 'marked'

export class HTMLMarkdownParser implements MarkdownParser {
  dependencies = {}

  toVue(markdownContent: string): string {
    return parse(markdownContent)
  }
}
