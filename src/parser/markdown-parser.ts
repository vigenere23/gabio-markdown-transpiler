import type { MarkdownParserOutput } from './markdown-parser-output'

/**
 * Interface for parsing markdown content.
 *  You can provide your own implementation at runtime,
 *  for example using your own Svelte components.
 */
export interface MarkdownParser {
  /**
   * Transforms markdown content to any implementation wanted (ex: Vue components)
   * @param markdownContent The markdown content string
   */
  parse(markdownContent: string): MarkdownParserOutput
}
