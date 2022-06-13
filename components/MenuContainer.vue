<template>
  <ul class="list-simple menu">
    <menu-element v-for="menuItem in fileList" :menuItem="menuItem">
    </menu-element>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const fileList = useRuntimeConfig().public.FILE_LIST as [MenuItem]
    return {
      fileList
    }
  }, data() {
    return {
      fileList: []
    }
  }
})
</script>


<style lang="scss">
.menu ul {
  margin-left: 1em;
}
</style>
