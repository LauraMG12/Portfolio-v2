<script setup lang="ts">
import AppProject from "./shared/AppProject/AppProject.vue";
import ProjectsCarrousel from "./shared/AppProject/ProjectsCarrousel.vue";

import { projects } from "../content/Projects";
</script>

<template>
  <section id="projectsSection">
    <h2 class="section-title">{{ projects.sectionTitle }}</h2>
    <div class="projects-container">
      <AppProject
        v-for="project in projects.projects"
        :key="project.id"
        :color="project.color"
        :information="project.info"
      />
    </div>
    <ProjectsCarrousel />
  </section>
</template>
<style scoped lang="scss">
#projectsSection {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 100vh;
  & .projects-container {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
}
</style>
