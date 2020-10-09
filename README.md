![Build](https://github.com/vigenere23/gabio-markdown-transpiler/workflows/Build/badge.svg)
[![npm version](https://badge.fury.io/js/%40gabio%2Fmarkdown-transpiler.svg)](https://badge.fury.io/js/%40gabio%2Fmarkdown-transpiler)

# ⚙️ [@gabio/markdown-transpiler](https://www.npmjs.com/package/@gabio/markdown-transpiler)

A generic and extensible markdown transpiler

## Description

This tool will read markdown files and transform them into the appropriate file type. In order to achieve such a task, three interfaces each play a different role in the process:

1. A _`MarkdownParser`_, used to transform markdown files into HTML or components
2. An _`ImportsCreator`_, used to generate the appropriate import section inside the `<script>` tag
3. A _`FileCreator`_, used to wrap the parsed content and define the `<script>` section

The `MarkdownTranspiler` will take an implementation from each of these interfaces and output the resulting file.

## Installation

```
yarn add @gabio/markdown-transpiler
```

## Usage

A usage example can be found [here](https://github.com/vigenere23/gabio-markdown-transpiler/tree/master/example).

## [Documentation](https://vigenere23.github.io/gabio-markdown-transpiler)
