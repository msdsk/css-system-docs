<template>
  <div>
    <div class="showcase margin-top margin-bottom">
      <pre class="showcase__code"
        :class="{ 'showcase__code--visible': codeVisible }"><code v-html="format(html)"></code></pre>
      <div v-html="html" class="showcase__rendered"></div>
      <client-only v-if="js && js.length">
        <showcase-js :js="js[0]" />
      </client-only>
    </div>
    <div class="toolstrip toolstrip--no-margin flex--right showcase__btn">
      <button class="btn" @click="codeVisible = !codeVisible">
        {{ codeVisible ? "Hide code" : "Show code" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import hljs from "highlight.js/lib/core"
import hlhtml from "highlight.js/lib/languages/xml"
import nunjucks from "nunjucks"

nunjucks.configure({ autoescape: true })
hljs.registerLanguage("html", hlhtml)

export default defineComponent({

  props: {
    code: { type: String, required: true },
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
    js() {
      return /<script>([^]*?)(?=<\/script>)/.exec(this.code)
    }
  },
  methods: {
    format(code: string) {
      return code ? hljs.highlight("html", code).value : ""
    },
  }
})
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
