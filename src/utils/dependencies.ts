/**
 * A tree of dependencies.
 *  If the value is an array, it should be treated as named imports.
 *  If the value is a string, it should be treated as a default import.
 *
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
 */
export type Dependencies = { [key: string]: string[] | string }
