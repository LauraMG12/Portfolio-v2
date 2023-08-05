<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import HomePage from "./components/HomePage.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import AboutSection from "./components/AboutSection.vue";
import Footer from "./components/Footer.vue";

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
    <ProjectsSection />
    <AboutSection />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style lang="scss">
@import "@/styles/main.scss";

#navigation {
  width: 100vw;
  position: fixed;
  z-index: $navigation-index;
  &.blur-navigation {
    backdrop-filter: blur(35px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
}

#content {
  display: grid;
  grid-template-columns: repeat(12, minmax(25px, 75px));
  column-gap: 15px;
  grid-template-rows: 100vh repeat(3, 1fr);
  row-gap: $sections-gap;
  margin: 0 auto 0 auto;
  max-width: 1065px;
  @media screen and (max-width: $breackpoint-large) {
    margin: 0 100px 0 100px;
  }
  @media screen and (max-width: $breackpoint-medium) {
    margin: 0 50px 0 50px;
  }
  @media screen and (max-width: $breackpoint-small) {
    margin: 0 15px 0 15px;
    column-gap: 5px;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
