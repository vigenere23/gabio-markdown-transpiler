import { FileCreatorSvelte3 } from '../../src/file-creator/file-creator-svelte3'
import type { ImportsCreator } from '../../src/imports-creator/imports-creator'
import { anything, instance, mock, when } from 'ts-mockito'

describe(FileCreatorSvelte3.name, () => {
  let fileCreator: FileCreatorSvelte3

  const SOME_DEPENDENCIES = {}
  const SOME_PARSED_DEPENDENCIES = "import { hello } from 'world'"
  const SOME_IDENTIFIER = 'Component'
  const SOME_PARSED_MARKDOWN = `<h1>hello, world!</h1>
  <p class="hell" id="as">hApPy To See yOu!</p>
  <a href="some_body.once-told/me...">click meee</a>`

  beforeEach(() => {
    const importsCreator = mock<ImportsCreator>()
    when(importsCreator.createImports(anything())).thenReturn(SOME_PARSED_DEPENDENCIES)
    fileCreator = new FileCreatorSvelte3(instance(importsCreator))
  })

  describe('fileExtension', () => {
    test('it should be .svelte', () => {
      expect(fileCreator.fileExtension).toEqual('.svelte')
    })
  })

  describe('additionalDependencies()', () => {
    test('it should be empty', () => {
      expect(fileCreator.additionalDependencies).toEqual({})
    })
  })

  describe('create()', () => {
    it('should wrap parsed markdown in a single div', () => {
      const wrappedParsedMarkdown = `<div>
  ${SOME_PARSED_MARKDOWN}
</div>`

      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).toContain(wrappedParsedMarkdown)
    })

    it('wraps the dependencies in a <script> tag', () => {
      const wrappedDependencies = `<script lang="ts">
  ${SOME_PARSED_DEPENDENCIES}
</script>`
      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).toContain(wrappedDependencies)
    })

    it('adds the markup before the script', () => {
      const content = `</div>

<script lang="ts">`
      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).toContain(content)
    })
  })
})
