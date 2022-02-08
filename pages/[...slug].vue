<template>
  <div>
    <css-section v-for="cssSection in cssSections" :key="cssSection" :section="cssSection" />
  </div>
</template>

<script>
export default {
  async setup(_props, context) {
    const route = useRoute(),
      config = useRuntimeConfig()
    return {
      cssSections: await useAsyncData(
        'slug',
        () => import(
          `../${config.devFolder}${route.path.replace(
            /\/([^\/]*)$/,
            "/_$1"
          )}.scss-doc?raw`
        )
          .then(res => {
            console.log(res)
            return res.default
              .split("/*")
              .filter(item => !/^\s*$/.exec(item))
          })
          .catch(e => {
            console.error(e);
            return null
          })
      ).data
    }
  }
};
</script>

<style>
</style>
