<script setup lang="ts">
import { IconTypes } from "./shared/SvgIcon/SvgIconHelper";
import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import AppPill from "./shared/AppPill.vue";
</script>

<template>
  <section id="aboutSection">
    <h2 class="section-title">About</h2>
    <div class="about-header">
      <h3>Laura Mañogil González</h3>
      <AppPill name="Front-end Developer" color="light" class="frontend-pill" />
      <SvgIcon :name="IconTypes.LinkedIn" />
      <SvgIcon :name="IconTypes.GitHub" />
    </div>
  </section>
</template>
<style scoped lang="scss">
#aboutSection {
  grid-column: 1/-1;
  grid-row: 3/4;

  display: flex;
  flex-direction: column;
  .about-header {
    display: flex;
    align-items: baseline;
    gap: 45px;
    & .frontend-pill {
      height: 25px;
    }
  }
}
</style>
