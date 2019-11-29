<template>
  <div>
    <css-section v-for="cssSection in cssSections" :key="cssSection" :section="cssSection" />
  </div>
</template>

<script>
import CssSection from "~/components/CssSection";

export default {
  components: {
    CssSection
  },
  asyncData(context) {
    return import(
      /* webpackMode: "eager" */
      `../dev/css_module_copy/${
        process.env.cssModule
      }${context.route.path.replace(/\/([^\/]*)$/, "/_$1")}.scss-doc`
    )
      .then(res => {
        return {
          cssSections: res.default
            .split("/*")
            .filter(item => !/^\s*$/.exec(item))
        };
      })
      .catch(e => {
        console.error(e);
        return { cssSections: null };
      });
  }
};
</script>

<style>
</style>
