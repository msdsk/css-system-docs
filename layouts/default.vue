<template>
  <div class="main-container">
    <menu-directory :directory="fileList" class="container" />
    <nuxt class="content" />
  </div>
</template>

<script>
import MenuDirectory from "~/components/MenuDirectory";
import "@thisisdeploy/css-system/index.scss";

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
.content {
  max-width: 50em;
  width: 100%;
  padding: 2em 2em;
  margin: auto;
}
</style>

<style src="highlight.js/styles/github.css">
</style>
<style lang="scss" src="~/assets/css/index.scss"></style>
