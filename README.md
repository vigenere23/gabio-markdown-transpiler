# markdown-vue-transpiler

A markdown to Vue transpiler

## Description

This tool is meant to be used in a script and NOT during runtime. It will read markdown files and transform them into the appropriate Vue files. The transpilator will use 2 main objects in order to achieve this :

1. A markdown parser, used to transform markdown tokens into Vue components
2. A Vue file creator, used to wrap the parsed content and define the `<script>` section

## Installation

```
yarn add @gabio/markdown-vue-transpiler
```

## Usage

A usage example can be found [here](./example).
