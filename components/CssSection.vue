<template>
  <div>
    <div v-html="text" class="comment"></div>
    <showcase v-if="code" :code="code" />
    <pre class="margin-top margin-bottom"><code v-html="highlightCss(css)"></code></pre>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/core"
import hlcss from "highlight.js/lib/languages/scss"
import MarkdownIt from "markdown-it"


hljs.registerLanguage("scss", hlcss)

const md = new MarkdownIt()

function stripWhitespace(string) {
  let strippedString = string.replace(/(^\s+)|(\s+$)/g, "")
  return strippedString
}

export default {
  props: {
    section: { type: String },
  },
  data() {
    return {
      text: "",
      code: "",
      css: "",
    }
  },
  methods: {
    highlightCss(css) {
      return css ? hljs.highlight("scss", css).value : ""
    },
    parseSection(section) {
      const data = section.split("*/")
      if (data.length === 1) {
        this.text = ""
        this.code = ""
        this.css = data[0]
      } else {
        const comment = data[0].split("```example"),
          text = stripWhitespace(comment[0]),
          html = stripWhitespace((comment[1] || "").replace("```", "")),
          css = stripWhitespace(data[1])

        this.text = md.render(text)
        this.code = html
        this.css = css
      }
    },
  },
  watch: {
    section: (value) => {
      this.parseSection(value)
    },
  },
  mounted() {
    this.parseSection(this.section)
  },
}
</script>

<style lang="scss">
.comment {
  & > :not(:first-child) {
    margin-top: 1em;
  }
}
</style>
