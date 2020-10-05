import { FileCreator } from './file-creator'

export class VueTypescriptClassFileCreator extends FileCreator {
  protected wrapParsedContent(parsedMarkdown: string, imports: string, fileName: string): string {
    return `<template>
  <div>
    ${parsedMarkdown}
  </div>
</template>

<script lang="ts">
  ${imports}
  ${this.additionalImports}

  @Component
  export default class ${this.getComponentName(fileName)} extends Vue {}
</script>
`
  }

  private get additionalImports(): string {
    return `import Vue from 'vue'
  import { Component } from 'vue-property-decorator'`
  }

  get fileExtension(): string {
    return '.vue'
  }
}
