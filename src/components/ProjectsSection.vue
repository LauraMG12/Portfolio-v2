<script setup lang="ts">
import AppProject from "./shared/AppProject/AppProject.vue";
</script>

<template>
  <section id="projectsSection">
    <h2 class="section-title">Projects</h2>
    <div class="projects-container">
      <AppProject color="blue" />
      <AppProject color="pink" />
      <AppProject color="orange" />
    </div>
  </section>
</template>
<style scoped lang="scss">
#projectsSection {
  grid-column: 1/-1;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  & .projects-container {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
}
</style>
