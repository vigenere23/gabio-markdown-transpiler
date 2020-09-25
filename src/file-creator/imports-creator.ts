import { VueDependencies } from '@/vue-dependencies'

export class ImportsCreator {
  createImports(dependencies: VueDependencies): string {
    let imports = ''

    for (const [depPackage, depModules] of Object.entries(dependencies)) {
      const modules = Array.isArray(depModules) ? `{ ${depModules.join(', ')} }` : depModules
      imports += `import ${modules} from '${depPackage}';`
    }

    return imports
  }
}
