<script setup lang="ts">
import AppProject from "./shared/AppProject/AppProject.vue";
import SubProjectCard from "./shared/AppProject/SubProjectCard.vue";

import { projects } from "../content/Projects";
</script>

<template>
  <section id="projectsSection" class="content">
    <h2 class="section-title">{{ projects.sectionTitle }}</h2>
    <div class="projects-container">
      <AppProject
        v-for="project in projects.projects"
        :key="project.id"
        :color="project.color"
        :information="project.info"
      />
    </div>
  </section>
  <div class="sub-projects">
    <SubProjectCard
      v-for="subProject in projects.subProjects"
      :key="subProject.title"
      :information="subProject"
    />
  </div>
</template>
<style scoped lang="scss">
#projectsSection {
  display: flex;
  flex-direction: column;
  position: relative;
  & .projects-container {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
}
.sub-projects {
  width: 100vw;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 50px;
}
</style>
