<template>
  <div class="main-container">
    <div class="menu-container">
      <div class="container">
        <nuxt-link class="link-simple h2" to="/">Home</nuxt-link>
      </div>
      <menu-directory :directory="fileList" class="container" />
    </div>
    <nuxt class="content" />
  </div>
</template>

<script>
import MenuDirectory from "~/components/MenuDirectory";
const css = require(`../${process.env.cssModule}`);

export default {
  components: {
    MenuDirectory
  },
  data() {
    return {
      fileList: process.env.fileList
    };
  }
};
</script>

<style>
.main-container {
  display: grid;
  grid-template-columns: 20em auto;
}
.menu-container {
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-height: 100vh;
  overflow-y: auto;
}
.content {
  max-width: 50em;
  width: 100%;
  padding: 2em 2em;
  margin: 0 auto;
}
</style>

<style src="highlight.js/styles/github.css">
</style>
<style lang="scss" src="~/assets/css/index.scss"></style>
