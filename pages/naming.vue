<template>
  <div>
    <h1>Naming</h1>
    <p class="comment">
      This system uses baseline
      <a href="http://getbem.com/naming/">BEM</a> with
      <code>--</code> (double
      dash) denoting modifiers to classes and
      <code>__</code> (double underline)
      denoting elements in a block. For example:
    </p>
    <pre>
      <code v-html="highlightedExample" />
    </pre>
    <p class="comment">
      For
      <code>scss</code> it means that we should use nesting of classes whenever
      possible:
    </p>
    <pre>
      <code v-html="highlightedExampleCss" />
    </pre>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/core"
import hlhtml from "highlight.js/lib/languages/xml"
import hlscss from "highlight.js/lib/languages/scss"
hljs.registerLanguage("html", hlhtml)
hljs.registerLanguage("scss", hlscss)

export default {
  data() {
    return {
      example: `
<div class="block-element">
  <span class="block-element__item">
    <span class="block-element__nested-item"></span>
  </span>
</div>

<div class="block-element--smaller">
  <span class="block-element__item"></span>
</div>

<div class="block-element">
  <span class="block-element__item--red"></span>
</div>`,
      exampleCss: `
.block-element {
  background: blue;

  &--smaller{
    font-size: .7em;
  }

  &__item{
    color: white;
  }

  &__nested-item{
    border: 1px solid;
  }
}
      `,
    }
  },
  computed: {
    highlightedExample() {
      return hljs.highlight("html", this.example).value
    },
    highlightedExampleCss() {
      return hljs.highlight("scss", this.exampleCss).value
    },
  },
}
</script>

<style>
</style>
