import fs from 'fs'
import path from 'path'
import { MarkdownParserHTML } from '../../src/parser/markdown-parser-html'

describe(MarkdownParserHTML.name, () => {
  let parser: MarkdownParserHTML
  let markdownTestFile: string

  beforeEach(() => {
    parser = new MarkdownParserHTML()
    markdownTestFile = fs.readFileSync(path.join(__dirname, '../test.md')).toString()
  })

  describe('getDependencies()', () => {
    test('should be empty', () => {
      const dependencies = parser.parse(markdownTestFile).dependencies
      expect(dependencies).toEqual({})
    })
  })

  describe('parse()', () => {
    test('it returns the right content', () => {
      const parsedMarkdown = parser.parse(markdownTestFile).parsedContent
      const expectedContent = `<h1 id="a-bright-sun">A bright sun</h1>
<h2 id="the-day-i-was-born">The day I was born</h2>
<p>It was in the year <strong>503</strong>, once...</p>
<blockquote>
<p><em>They should be all damned</em></p>
</blockquote>
<p><img src="https://picsum.photos/seed/picsum/536/354" alt="test image"></p>
`
      expect(parsedMarkdown).toEqual(expectedContent)
    })
  })
})
