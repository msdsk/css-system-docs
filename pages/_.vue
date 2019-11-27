<template>
  <div>
    <pre><code v-html="css"></code></pre>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/highlight";
import hlcss from "highlight.js/lib/languages/scss";

hljs.registerLanguage("scss", hlcss);

export default {
  asyncData(context) {
    return import(
      /* webpackMode: "eager" */
      `../dev/css_module_copy/${
        process.env.cssModule
      }${context.route.path.replace(/\/([^\/]*)$/, "/_$1")}.scss-doc`
    )
      .then(res => {
        return {
          css: hljs.highlight("scss", res.default).value
        };
      })
      .catch(e => {
        console.error(e);
        return { css: null };
      });
  }
};
</script>

<style>
</style>
