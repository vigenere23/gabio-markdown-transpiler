import { FileCreator } from './file-creator'

export class SvelteFileCreator extends FileCreator {
  protected wrapParsedContent(parsedMarkdown: string, imports: string, _fileName: string): string {
    return `<div>
  ${parsedMarkdown}
</div>

<script lang="ts">
  ${imports}
</script>
`
  }

  get fileExtension(): string {
    return '.svelte'
  }
}
