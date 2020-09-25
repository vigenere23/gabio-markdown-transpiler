import { VueDependencies } from '../vue-dependencies'

export interface MarkdownParser {
  toVueTemplate(markdownContent: string): string
  dependencies: VueDependencies
}
