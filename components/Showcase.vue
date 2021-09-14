<template>
  <div>
    <div class="showcase margin-top margin-bottom">
      <pre
        class="showcase__code"
        :class="{ 'showcase__code--visible': codeVisible }"
      ><code v-html="format(html)"></code></pre>
      <div v-html="html" class="showcase__rendered"></div>
    </div>
    <div class="toolstrip toolstrip--no-margin flex--right showcase__btn">
      <button class="btn" @click="codeVisible = !codeVisible">
        {{ codeVisible ? "Hide code" : "Show code" }}
      </button>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/core"
import hlhtml from "highlight.js/lib/languages/xml"
import nunjucks from "nunjucks"

nunjucks.configure({ autoescape: true })
hljs.registerLanguage("html", hlhtml)

export default {
  props: {
    code: String,
  },
  data() {
    return {
      codeVisible: false,
    }
  },
  computed: {
    html() {
      return this.code
        ? nunjucks.renderString(this.code.replace(/<script>.*<\/script>/, ""))
        : ""
    },
  },
  methods: {
    format(code) {
      return code ? hljs.highlight("html", code).value : ""
    },
    evaluateJs() {
      const js = /<script>([^]*?)(?=<\/script>)/.exec(this.code)
      if (!js || !js[1]) return
      eval(js[1])
    },
  },
  watch: {
    code() {
      this.evaluateJs()
    },
  },
  mounted() {
    this.evaluateJs()
  },
}
</script>

<style lang="scss">
.showcase {
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5em;
  min-height: 10em;

  &__btn {
    position: sticky;
    bottom: 0;
    z-index: 3;
  }

  &__code {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transform: translateX(100%);
    background: #fff;
    transition: transform 0.5s ease-in;
    font-size: 0.85em;
    padding: 1em;
    z-index: 2;

    &--visible {
      transform: translateX(0%);
      transition: transform 0.5s ease-out;
    }
  }
}
</style>
