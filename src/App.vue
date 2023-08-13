<script setup lang="ts">
import { onMounted, ref } from "vue";

import NavigationBar from "./components/NavigationBar.vue";
import HomePage from "./components/HomePage.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/Footer.vue";

import { isMobileNavigationOpened, isSmallDevice } from "@/state/AppState";
import TechnologiesSection from "./components/TechnologiesSection.vue";

const isScrollPositionOnTop = ref<boolean>(true);
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
function updateScroll() {
  isScrollPositionOnTop.value = window.scrollY === 0;
}
</script>

<template>
  <div ref="app" :class="{ fixed: isMobileNavigationOpened }">
    <header
      id="navigation"
      :class="{
        'blur-navigation': !isScrollPositionOnTop,
        white: isMobileNavigationOpened && isSmallDevice,
      }"
    >
      <NavigationBar />
    </header>

    <main id="content">
      <HomePage />
      <ProjectsSection />
      <TechnologiesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <footer>
      <FooterSection />
    </footer>
  </div>
</template>

<style lang="scss">
@import "@/styles/main.scss";

#app {
  .fixed {
    position: fixed;
  }

  #navigation {
    width: 100vw;
    position: fixed;
    z-index: $navigation-index;
    &.blur-navigation {
      background-color: $white;
      box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    }
    &.white {
      background-color: $white;
    }
  }

  #content {
    display: flex;
    flex-direction: column;
    gap: $sections-gap;
    margin: 0 auto 0 auto;
    max-width: 1065px;
    padding-bottom: 8rem;
    @media screen and (max-width: $breackpoint-large) {
      margin: 0 100px 0 100px;
    }
    @media screen and (max-width: $breackpoint-medium) {
      margin: 0 50px 0 50px;
    }
    @media screen and (max-width: $breackpoint-small) {
      margin: 0 15px 0 15px;
    }
  }
}
</style>
