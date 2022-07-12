<template>
  <div>
    <!-- <css-section v-for="section in cssSections" :section="section" /> -->
    <css-documentation :slug="slug" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
  // async setup() {
  //   const route = useRoute()
  //   const slug = (route.params.slug as string[]).join("/").replace(/([^/]*)$/, "_$1")
  //   const cssText: string = (await import(/* @vite-ignore */ `../../css/${slug}.scss?raw`).catch(console.error))?.default || ""
  //   return {
  //     cssText
  //   }
  // },
  // data() {
  //   return {
  //     cssText: ""
  //   }
  // },
  // computed: {
  //   cssSections(): Array<string> {
  //     console.log(this.cssText)
  //     return this.cssText?.split("/*")
  //       .filter(item => !/^\s*$/.exec(item))
  //   }
  // },
  // mounted() {
  //   // fetch(cssRoute).then(res => res.text())
  //   //   .then(res => this.cssText = res)
  // }
})
</script>


<style lang="scss">
</style>
