import { ImportsCreatorES6Module } from '../../src/imports-creator/imports-creator-es6-module'

describe(ImportsCreatorES6Module.name, () => {
  let importsCreator: ImportsCreatorES6Module

  beforeEach(() => {
    importsCreator = new ImportsCreatorES6Module()
  })

  describe('createImports()', () => {
    test('it can generate both named and default imports', () => {
      const dependencies = {
        '@gabio/design-svelte': ['GioButton', 'GioTag'],
        '@gabio/markdown-transpiler': 'MarkdownTranspiler'
      }
      const expectedImports = `import { GioButton, GioTag } from '@gabio/design-svelte'
import MarkdownTranspiler from '@gabio/markdown-transpiler'
`
      const imports = importsCreator.createImports(dependencies)
      expect(imports).toEqual(expectedImports)
    })
  })
})
