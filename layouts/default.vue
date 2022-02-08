<template>
  <div class="main-container">
    <div class="menu-container">
      <div class="container">
        <nuxt-link class="link-simple h2" to="/">Home</nuxt-link>
        <ul class="menu-directory">
          <li class="link-simple menu-directory__item">
            <nuxt-link to="/naming" class="link-simple">Naming conventions</nuxt-link>
          </li>
        </ul>
      </div>
      <menu-directory :directory="fileList" class="container" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>


<script>

export default {
  setup() {
    return { config: useRuntimeConfig() }
  },
  data() {
    return {
      fileList: this.config.fileList
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
