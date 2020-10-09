import { FileCreator } from './file-creator'
import type { Dependencies } from '../utils/dependencies'

/**
 * Creates a Svelte v3.x file with parsed markdown content.
 *  identifier will be ignored since there's no need to export a class.
 */
export class FileCreatorSvelte3 extends FileCreator {
  protected wrapParsedContent(parsedMarkdown: string, parsedDependencies: string, _identifier: string): string {
    return `<div>
  ${parsedMarkdown}
</div>

<script lang="ts">
  ${parsedDependencies}
</script>
`
  }

  get fileExtension(): string {
    return '.svelte'
  }

  get additionalDependencies(): Dependencies {
    return {}
  }
}
