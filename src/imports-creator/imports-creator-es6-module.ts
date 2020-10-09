import type { ImportsCreator } from './imports-creator'
import type { Dependencies } from '../utils/dependencies'

/**
 * Creates imports string with the ES6 modules syntax.
 * Example:
 *
 * ```ts
 * const deps: Dependencies = {
 *   '@gabio/design-svelte': [
 *     'GioButton',
 *     'GioHeading'
 *   ],
 *   '@gabio/markdown-parser': 'MarkdownParser'
 * }
 * ```
 *
 * Will generate:
 *
 * ```ts
 * import { GioButton, GioHeading } from '@gabio/design-svelte'
 * import MarkdownParser from '@gabio/markdown-parser'
 * ```
 */
export class ImportsCreatorES6Module implements ImportsCreator {
  createImports(dependencies: Dependencies): string {
    let imports = ''

    for (const [depPackage, depModules] of Object.entries(dependencies)) {
      const modules = Array.isArray(depModules) ? `{ ${depModules.join(', ')} }` : depModules
      imports += `import ${modules} from '${depPackage}';`
    }

    return imports
  }
}
