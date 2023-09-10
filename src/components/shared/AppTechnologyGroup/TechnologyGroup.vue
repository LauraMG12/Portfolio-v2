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
      <h3 class="title">{{ information.group }}</h3>
      <div class="underline" :class="[props.information.color]"></div>
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
          :translate="{ x: 5, y: 0 }"
        />
        <p class="technology-name">{{ technology.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.technologies-group {
  & .group-title {
    display: flex;
    flex-direction: column;
    & .underline {
      width: 100%;
      height: 10px;
      border-radius: 10px;
      @media screen and (max-width: $breackpoint-small) {
        height: 7px;
      }
      &.blue {
        background: $blue-gradient-opacity-90;
      }
      &.pink {
        background: $pink-gradient-opacity-90;
      }
      &.orange {
        background: $orange-gradient-opacity-90;
      }
    }
    & .title {
      padding: 15px 30px;
      font-weight: $font-weight-bold;
      font-size: $font-size-p-desktop;
      color: $grey-dark;
      @media screen and (max-width: $breackpoint-small) {
        font-size: $font-size-button;
        padding: 10px 20px;
      }
    }
  }
  & .group-container {
    display: flex;
    padding: 30px 30px 75px 30px;
    column-gap: 50px;
    row-gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    & .technology-wraper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 60px;

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
