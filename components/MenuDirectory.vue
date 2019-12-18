<template>
  <ul class="menu-directory">
    <li v-for="file in directory.files" :key="file" class="menu-directory__item">
      <nuxt-link class="link-simple" :to="file">{{formattedFileName(file)}}</nuxt-link>
    </li>
    <li
      v-for="(innerDirectory, innerDirectoryName) in directory.directories"
      :key="innerDirectoryName"
    >
      <h3>{{innerDirectoryName}}</h3>
      <menu-directory :directory="innerDirectory" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "menu-directory",
  props: {
    directory: {},
    level: {
      default: 0
    }
  },
  methods: {
    formattedFileName(name) {
      return name.split("/").slice(-1)[0];
    }
  }
};
</script>

<style lang="scss">
.menu-directory {
  list-style-type: none;

  .menu-directory {
    margin-left: 1em;
  }
}
</style>
