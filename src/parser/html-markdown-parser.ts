import { MarkdownParser } from './markdown-parser'
import { parse, Renderer } from 'marked'
import { RelativeUrlResolver, resolveURL } from 'src/utils/url'

class HTMLMarkdownRenderer extends Renderer {
  constructor(private relativeUrlResolver?: RelativeUrlResolver) {
    super()
  }

  image(href: string, title: string, text: string): string {
    const resolvedHref = resolveURL(href, this.relativeUrlResolver)
    return super.image(href, title, text)
  }
}

export class HTMLMarkdownParser implements MarkdownParser {
  dependencies = {}

  toVue(markdownContent: string): string {
    return parse(markdownContent)
  }
}
