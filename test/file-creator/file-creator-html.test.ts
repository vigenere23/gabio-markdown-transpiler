import { FileCreatorHTML } from '../../src/file-creator/file-creator-html'
import type { ImportsCreator } from '../../src/imports-creator/imports-creator'
import { anything, instance, mock, when } from 'ts-mockito'

describe(FileCreatorHTML.name, () => {
  let fileCreator: FileCreatorHTML

  const SOME_DEPENDENCIES = {}
  const SOME_PARSED_DEPENDENCIES = "import { hello } from 'world'"
  const SOME_IDENTIFIER = 'Component'
  const SOME_PARSED_MARKDOWN = `<h1>hello, world!</h1>
  <p class="hell" id="as">hApPy To See yOu!</p>
  <a href="some_body.once-told/me...">click meee</a>`

  beforeEach(() => {
    const importsCreator = mock<ImportsCreator>()
    when(importsCreator.createImports(anything())).thenReturn(SOME_PARSED_DEPENDENCIES)
    fileCreator = new FileCreatorHTML(instance(importsCreator))
  })

  describe('fileExtension', () => {
    test('it should be .html', () => {
      expect(fileCreator.fileExtension).toEqual('.html')
    })
  })

  describe('additionalDependencies()', () => {
    test('it should be empty', () => {
      expect(fileCreator.additionalDependencies).toEqual({})
    })
  })

  describe('create()', () => {
    it('should wrap parsed markdown in an HTML and body tag', () => {
      const wrappedParsedMarkdown = `<!DOCTYPE html>
<html>
  <body>
    ${SOME_PARSED_MARKDOWN}
  </body>
</html>`

      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).toContain(wrappedParsedMarkdown)
    })

    it('does not add a <script> tag', () => {
      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).not.toContain('<script>')
    })
  })
})
