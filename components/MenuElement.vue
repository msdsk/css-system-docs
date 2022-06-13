<template>
  <li v-if="isDirectory">
    <h3>{{ title }}</h3>
    <ul class="list-simple" v-for="subMenuItem in menuItem[1]">
      <menu-element :menu-item="subMenuItem" :uri-elements="uriElementsNext" />
    </ul>
  </li>
  <li v-else>
    <nuxt-link :to="link" class="link-simple">{{ title }}</nuxt-link>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type UriElements = Array<string>

export default defineComponent({
  props: {
    menuItem: { type: Object as PropType<MenuItem>, required: true },
    uriElements: Object as PropType<UriElements>
  },
  data() {
    return {
      uriElementsNext: (this.uriElements || []).concat(this.menuItem[0])
    }
  },
  computed: {
    isDirectory() {
      return !!this.menuItem[1]
    },
    title() {
      return this.menuItem[0].replace(".scss", "").replace(/^_/, "").replace(/_/g, " ")
    },
    link() {
      return `/documentation/${this.uriElementsNext.join("/")}`.replace("/_", "/").replace(".scss", "")
    }
  }
})
</script>


<style lang="scss">
</style>
