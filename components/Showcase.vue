<template>
  <div>
    <pre><code v-html="format(html)"></code></pre>
    <div v-html="html"></div>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/highlight";
import hlhtml from "highlight.js/lib/languages/xml";
import nunjucks from "nunjucks";

nunjucks.configure({ autoescape: true });
hljs.registerLanguage("html", hlhtml);

export default {
  props: {
    code: String
  },
  computed: {
    html() {
      return this.code ? nunjucks.renderString(this.code) : "";
    }
  },
  methods: {
    format(code) {
      return code ? hljs.highlight("html", code).value : "";
    }
  }
};
</script>

<style>
</style>
