<script setup lang="ts">
import { technologies } from "../content/Technologies";
import technologyGroup from "./shared/AppTechnologyGroup/TechnologyGroup.vue";
</script>

<template>
  <section id="technologiesSection">
    <h2 class="section-title">{{ technologies.sectionTitle }}</h2>
    <div class="technologies-container">
      <technologyGroup
        v-for="technologyGroup in technologies.technologies"
        :key="technologyGroup.group"
        :color="technologyGroup.color"
        :information="technologyGroup.technologies"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
#technologiesSection {
  display: flex;
  flex-direction: column;
  & .technologies-container {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
}
</style>
