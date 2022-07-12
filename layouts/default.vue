<template>
  <div class="main-container">
    <div class="menu-container">
      <div class="container">
        <nuxt-link class=" h2" to="/">Home</nuxt-link>
        <ul class="list-simple">
          <li class="link-simple menu-directory__item">
            <nuxt-link to="/naming" class="link-simple">Naming conventions</nuxt-link>
          </li>
        </ul>
      </div>
      <menu-container class="container" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>


<script>
export default {
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
