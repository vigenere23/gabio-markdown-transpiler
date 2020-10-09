import { FileCreator } from './file-creator'
import type { Dependencies } from '../utils/dependencies'

/**
 * Creates a Vue v2.x typescript class-based file with parsed markdown content.
 */
export class FileCreatorVue2TypescriptClass extends FileCreator {
  protected wrapParsedContent(parsedMarkdown: string, parsedDependencies: string, identifier: string): string {
    return `<template>
  <div>
    ${parsedMarkdown}
  </div>
</template>

<script lang="ts">
  ${parsedDependencies}

  @Component
  export default class ${this.getComponentName(identifier)} extends Vue {}
</script>
`
  }

  get fileExtension(): string {
    return '.vue'
  }

  get additionalDependencies(): Dependencies {
    return {
      vue: 'Vue',
      'vue-property-decorator': ['Component']
    }
  }
}
