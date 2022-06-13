<template></template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    js: {
      type: String, required: true
    }
  },
  methods: {
    evaluateJs(): void {
      console.log(document)
      debugger
      if (!this.js || !this.js[1]) return
      Function(this.js[1])()
    },
  },
  mounted() {
    console.log(document)
    this.evaluateJs()
  }
})
</script>


<style lang="scss">
</style>
