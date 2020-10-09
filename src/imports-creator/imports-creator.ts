import type { Dependencies } from '../utils/dependencies'

/**
 * Interface for generating the imports section
 */
export interface ImportsCreator {
  /**
   * Generates the import section
   * @param dependencies A dependency tree dictionnary used to generate the imports section
   */
  createImports(dependencies: Dependencies): string
}
