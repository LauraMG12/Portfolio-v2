<script setup lang="ts">
import { isSmallDevice } from "@/state/AppState";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import type { GroupedTechnologies } from "@/content/Technologies";
import { computed } from "vue";

interface TechnologyGroupProps {
  information: GroupedTechnologies;
}
const props = defineProps<TechnologyGroupProps>();
const iconsSize = computed(() =>
  isSmallDevice.value ? { width: 40, height: 40 } : { width: 50, height: 50 }
);
</script>

<template>
  <div class="technologies-group">
    <div class="group-title">
      <p class="title">{{ information.group }}</p>
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
          :size="iconsSize"
          :translate="{ x: 8, y: 0 }"
        />
        <p class="technology-name">{{ technology.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.technologies-group {
  & .group-title {
    padding: 15px 30px;
    background: $grey-light;
    border-radius: 15px;
    box-shadow: 0px 3px 0px 0px #3f3f3f;
    & .title {
      font-weight: $font-weight-bold;
    }
  }
  & .group-container {
    display: flex;
    padding: 50px 25px 75px 25px;
    column-gap: 100px;
    row-gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    & .technology-wraper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      & .technology-name {
        color: $grey;
        font-size: $font-size-small;
        @media screen and (max-width: $breackpoint-small) {
          font-size: $font-size-smallest;
        }
      }
    }
  }
}
</style>
