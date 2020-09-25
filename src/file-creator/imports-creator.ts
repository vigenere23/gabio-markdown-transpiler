import { VueDependencies } from '../vue-dependencies'

export class ImportsCreator {
  createImports(dependencies: VueDependencies): string {
    let imports = ''

    imports = this.createImportLines(imports, dependencies)

    return imports
  }

  private createImportLines(imports: string, dependencies: VueDependencies, packageLine = ''): string {
    for (const [depPackage, depModules] of Object.entries(dependencies)) {
      packageLine = `${packageLine}/${depPackage}`

      if (Array.isArray(depModules)) {
        const modules = depModules.length > 1 ? `{ ${depModules.join(', ')} }` : depModules
        imports += `import ${modules} from '${depPackage}'\n`
      } else {
        return this.createImportLines(imports, depModules, packageLine)
      }
    }

    return imports
  }
}
