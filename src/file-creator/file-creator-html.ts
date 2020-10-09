import { FileCreator } from './file-creator'
import type { Dependencies } from '../utils/dependencies'

/**
 * Creates an HTML file with parsed markdown content.
 *  Parsed imports and identifier will be ignored since no `<script>` tag will be present.
 */
export class FileCreatorHTML extends FileCreator {
  protected wrapParsedContent(parsedMarkdown: string, _parsedDependencies: string, _identifier: string): string {
    return `<!DOCTYPE html>
<html>
  <body>
    ${parsedMarkdown}
  </body>
</html>
`
  }

  get fileExtension(): string {
    return '.html'
  }

  get additionalDependencies(): Dependencies {
    return {}
  }
}
