<script setup lang="ts">
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import type { GroupedTechnologies } from "@/content/Technologies";

interface TechnologyGroupProps {
  information: GroupedTechnologies;
}
const props = defineProps<TechnologyGroupProps>();
</script>

<template>
  <div class="technologies-group">
    <div class="group-title">
      <h4>{{ information.group }}</h4>
    </div>
    <div class="group-container">
      <div
        class="technology-wraper"
        v-for="technology in props.information.technologies"
        :key="technology.name"
      >
        <SvgIcon
          class="technology-icon"
          :name="technology.iconName"
          :size="{ width: 50, height: 50 }"
        />
        <p class="technology-name">{{ technology.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.technologies-group {
  & .group-title {
    padding: 10px 20px;
    background: $blue-gradient-opacity-90;
    border-radius: 20px;
  }
  & .group-container {
    display: flex;
    padding: 50px 100px;
    gap: 100px;
    flex-wrap: wrap;
    justify-content: center;
    & .technology-wraper {
      display: flex;
      flex-direction: column;
      align-items: center;
      & svg.icon {
        mix-blend-mode: luminosity;
      }
    }
  }
}
</style>
