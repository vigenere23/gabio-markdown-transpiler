import { VueDependencies } from '@/vue-dependencies'

export interface MarkdownParser {
  toVue(markdownContent: string): string
  dependencies: VueDependencies
}
