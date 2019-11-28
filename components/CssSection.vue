<template>
  <div>
    <div v-html="text"></div>
    <div v-html="highlightHtml(code)"></div>
    <pre><code v-html="highlightCss(css)"></code></pre>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/highlight";
import hlcss from "highlight.js/lib/languages/scss";
import hlhtml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("scss", hlcss);
hljs.registerLanguage("html", hlcss);

export default {
  props: {
    section: { type: String }
  },
  data() {
    return {
      text: "",
      code: "",
      css: ""
    };
  },
  methods: {
    highlightCss(css) {
      return css ? hljs.highlight("scss", css).value : "";
    },
    highlightHtml(html) {
      return html ? hljs.highlight("html", html).value : "";
    },
    parseSection(section) {
      console.log(section);
      const data = section.split("*/"),
        comment = data[0],
        css = data[1];

      console.log("data", data);

      this.css = css;
      // console.log(comment);
    }
  },
  watch: {
    // section: value => {
    //   this.parseSection(value);
    // }
  },
  mounted() {
    this.parseSection(this.section);
  }
};
</script>

<style>
</style>
