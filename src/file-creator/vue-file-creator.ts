import { VueDependencies } from '../vue-dependencies'

export interface VueFileCreator {
  create(parsedMarkdown: string, dependencies: VueDependencies): string
}
