import { FileCreatorVue2TypescriptClass } from '../../src/file-creator/file-creator-vue2-typescript-class'
import type { ImportsCreator } from '../../src/imports-creator/imports-creator'
import { anything, instance, mock, when } from 'ts-mockito'

describe(FileCreatorVue2TypescriptClass.name, () => {
  let fileCreator: FileCreatorVue2TypescriptClass

  const SOME_DEPENDENCIES = {}
  const SOME_PARSED_DEPENDENCIES = "import { hello } from 'world'"
  const SOME_IDENTIFIER = 'Component'
  const SOME_PARSED_MARKDOWN = `<h1>hello, world!</h1>
  <p class="hell" id="as">hApPy To See yOu!</p>
  <a href="some_body.once-told/me...">click meee</a>`

  beforeEach(() => {
    const importsCreator = mock<ImportsCreator>()
    when(importsCreator.createImports(anything())).thenReturn(SOME_PARSED_DEPENDENCIES)
    fileCreator = new FileCreatorVue2TypescriptClass(instance(importsCreator))
  })

  describe('fileExtension', () => {
    test('it should be .vue', () => {
      expect(fileCreator.fileExtension).toEqual('.vue')
    })
  })

  describe('additionalDependencies()', () => {
    test('it should contain Vue and decorators', () => {
      expect(fileCreator.additionalDependencies).toEqual({
        vue: 'Vue',
        'vue-property-decorator': ['Component']
      })
    })
  })

  describe('create()', () => {
    it('should wrap parsed markdown in single template and div tags', () => {
      const wrappedParsedMarkdown = `<template>
  <div>
    ${SOME_PARSED_MARKDOWN}
  </div>
</template>`

      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).toContain(wrappedParsedMarkdown)
    })

    it('wraps the dependencies in a <script> tag and adds class declaration', () => {
      const wrappedDependencies = `<script lang="ts">
  ${SOME_PARSED_DEPENDENCIES}

  @Component
  export default class ${SOME_IDENTIFIER} extends Vue {}
</script>`
      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).toContain(wrappedDependencies)
    })

    it('adds the markup before the script', () => {
      const content = `</template>

<script lang="ts">`
      const file = fileCreator.create(SOME_PARSED_MARKDOWN, SOME_DEPENDENCIES, SOME_IDENTIFIER)
      expect(file).toContain(content)
    })
  })
})
