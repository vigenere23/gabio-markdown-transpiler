![Build](https://github.com/vigenere23/gabio-markdown-transpiler/workflows/Build/badge.svg)
[![npm version](https://badge.fury.io/js/%40gabio%2Fmarkdown-transpiler.svg)](https://badge.fury.io/js/%40gabio%2Fmarkdown-transpiler)

# ⚙️ [@gabio/markdown-transpiler](https://www.npmjs.com/package/@gabio/markdown-transpiler)

A **extensible** and **easy-to-use** markdown transpiler!

## Why?

What most transpilers do :

- Transpile at runtime, which takes time and delays your page loading 🙄
- Only transforms to basic HTML that you need to style with global HTML tag selectors 🤮
- Offers no way to extend their code for adding new transpiling strategies or supporting new file types 😑
- Does not permit the usage of components 😳

## Description

This tool will read markdown files and transform them into the appropriate file type. In order to achieve such a task, three interfaces each play a different role in the process:

1. A _`MarkdownParser`_, used to transform markdown files into HTML or components
2. An _`ImportsCreator`_, used to generate the appropriate import section inside the `<script>` tag
3. A _`FileCreator`_, used to wrap the parsed content and define the `<script>` section

The `MarkdownTranspiler` will take an implementation from each of these interfaces and output the resulting file. Some implementations are already offered to you, but you can always provide your own!

## Installation

```
yarn add @gabio/markdown-transpiler
```

## Usage

A usage example can be found [here](https://github.com/vigenere23/gabio-markdown-transpiler/tree/master/example).

## Implementing a `MarkdownParser`

As stated above, you can provide your own version of any parts of the transpiler. However, the most common interface to be implemented is the `MarkdownParser`. [Here](https://github.com/vigenere23/gabio-design-svelte/blob/main/src/lib/markdown.ts) is an example for transpiling to a Svelte component library.

For other interfaces, you can look at the source code for a good idea on how they can be implemented.

## [Documentation](https://vigenere23.github.io/gabio-markdown-transpiler)
