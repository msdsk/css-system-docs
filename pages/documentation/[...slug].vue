<template>
  <div>
    <css-section v-for="section in cssSections" :section="section" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  async setup() {
    // const route = useRoute()
    // const slug = (route.params.slug as string[]).join("/").replace(/([^/]*)$/, "_$1")
    // const cssRoute = `/css/${slug}.scss`
    // const { data: cssText } = await useFetch(cssRoute)
    // return {
    //   cssText
    // }
  },
  data() {
    return {
      cssText: ""
    }
  },
  computed: {
    cssSections(): Array<string> {
      return this.cssText?.split("/*")
        .filter(item => !/^\s*$/.exec(item))
    }
  },
  mounted() {
    const route = useRoute()
    const slug = (route.params.slug as string[]).join("/").replace(/([^/]*)$/, "_$1")
    const cssRoute = `/css/${slug}.scss`
    fetch(cssRoute).then(res => res.text())
      .then(res => this.cssText = res)
  }
})
</script>


<style lang="scss">
</style>
