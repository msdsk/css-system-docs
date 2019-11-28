<template>
  <ul>
    <li v-for="file in directory.files" :key="file">
      <a :href="file">{{formattedFileName(file)}}</a>
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
    directory: {}
  },
  methods: {
    formattedFileName(name) {
      return name.split("/").slice(-1)[0];
    }
  }
};
</script>

<style>
</style>
