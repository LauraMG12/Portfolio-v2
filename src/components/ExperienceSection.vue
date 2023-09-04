<script setup lang="ts">
import { experience } from "../content/Experience";
</script>

<template>
  <section id="experienceSection" class="content">
    <h2 class="section-title">{{ experience.sectionTitle }}</h2>
    <div class="experience-container"></div>
  </section>
</template>
<style scoped lang="scss">
#technologiesSection {
  display: flex;
  flex-direction: column;
  & .experience-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
