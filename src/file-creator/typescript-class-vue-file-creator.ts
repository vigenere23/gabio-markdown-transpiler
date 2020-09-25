import { VueFileCreator } from './vue-file-creator'

export class TypescriptClassVueFileCreator extends VueFileCreator {
  protected wrapVueContent(parsedMarkdown: string, imports: string, fileName: string): string {
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

  protected get additionalImports(): string {
    return `import Vue from 'vue'
  import { Component } from 'vue-property-decorator'`
  }
}
