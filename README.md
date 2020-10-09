[![npm version](https://badge.fury.io/js/%40gabio%2Fmarkdown-transpiler.svg)](https://badge.fury.io/js/%40gabio%2Fmarkdown-transpiler)

# ⚙️ @gabio/markdown-transpiler

A generic and extensible markdown transpiler

## Description

This tool is meant to be used in a script and NOT during runtime. It will read markdown files and transform them into the appropriate file type. The transpilator will use 2 main objects in order to achieve this :

1. A markdown parser, used to transform markdown tokens into components
2. A file creator, used to wrap the parsed content and define the `<script>` section

## Installation

```
yarn add @gabio/markdown-transpiler
```

## Usage

A usage example can be found [here](./example).

## Supported output file types

- Vuejs
  - 2.x - typescript class
- Svelte
  - 3.x - typescript (easily changeable to non-typescript by removing the `lang="ts"` attribute)
