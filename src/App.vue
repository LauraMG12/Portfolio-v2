<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import HomePage from "./components/HomePage.vue";

import { onMounted, ref } from "vue";

const isScrollPositionOnTop = ref<boolean>(true);
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
function updateScroll() {
  isScrollPositionOnTop.value = window.scrollY === 0;
}
</script>

<template ref="app">
  <header
    id="navigation"
    :class="{ 'blur-navigation': !isScrollPositionOnTop }"
  >
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
  transition: $basic-transition-025;
  &.blur-navigation {
    backdrop-filter: blur(35px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
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
