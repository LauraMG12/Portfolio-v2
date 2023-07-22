<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <header id="navigation">
    <NavigationBar />
  </header>

  <main id="content">
    <HomePage />
  </main>
  <footer></footer>
</template>

<style lang="scss">
@import "@/styles/main.scss";

#navigation {
  width: 100vw;
  position: fixed;
  z-index: $navigation-index;
}

#content {
  display: grid;
  grid-template-columns: repeat(12, auto);
  column-gap: 15px;
  grid-template-rows: repeat(4, 100vh);
  row-gap: $sections-gap;
  margin: 0 auto 0 auto;
  max-width: 1065px;
}
</style>
