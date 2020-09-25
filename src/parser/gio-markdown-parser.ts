import { RelativeUrlResolver, resolveURL } from '../utils/url'
import { MarkdownParser } from './markdown-parser'
import marked, { Renderer } from 'marked'

class GioMarkdownRenderer extends Renderer {
  constructor(private relativeUrlResolver: RelativeUrlResolver) {
    super()
  }

  heading(text: string, level: number): string {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
    return level === 1
      ? `<GioTitle no-margin fontSize="12rem">${text}</GioTitle>`
      : level === 6
      ? `<GioSubtitle>${text}</GioSubtitle>`
      : `<GioHeading :level="${level - 1}" id="#${escapedText}">${text}</GioHeading>`
  }

  paragraph(text: string): string {
    return `<GioBodyText>${text}</GioBodyText>`
  }

  image(href: string, title: string, text: string): string {
    return `
      <GioCaptionedImage
        :srcs="['${resolveURL(href, this.relativeUrlResolver)}']"
        caption="${text || title || ''}"
        lazy
      />
    `
  }

  blockquote(quote: string): string {
    return `<GioCaption>${quote}</GioCaption>`
  }

  codespan(code: string): string {
    return `<GioInlineCode>${code}</GioInlineCode>`
  }

  code(code: string, language?: string): string {
    return `<GioCodeBlock language="${language}" code="${encodeURI(code)}" />`
  }

  list(body: string /*ordered: boolean, start: number*/): string {
    return `<GioBodyText no-margin><GioList indent>${body}</GioList></GioBodyText>`
  }

  listitem(text: string): string {
    return `<GioListItem>${text}</GioListItem>`
  }

  link(href: string, _title: string, text: string) {
    return `<GioSmartLink accent href="${href}">${text}</GioSmartLink>`
  }
}

export class GioMarkdownParser implements MarkdownParser {
  private renderer: Renderer

  constructor(relativeUrlResolver: RelativeUrlResolver) {
    this.renderer = new GioMarkdownRenderer(relativeUrlResolver)
  }

  dependencies = {
    '@vigenere23/gio': [
      'GioBodyText',
      'GioTitle',
      'GioSubtitle',
      'GioHeading',
      'GioCaption',
      'GioInlineCode',
      'GioCodeBlock',
      'GioList',
      'GioListItem',
      'GioCaptionedImage',
      'GioSmartLink'
    ]
  }

  toVueTemplate(markdownContent: string): string {
    return marked(markdownContent, {
      renderer: this.renderer
    })
  }
}
