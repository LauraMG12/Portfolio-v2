<script setup lang="ts">
import AppPill from "../AppPill.vue";
import DarkButton from "../AppButtons/DarkButton.vue";
import SimpleButton from "../AppButtons/SimpleButton.vue";

import { ProjectInfo } from "../../../content/Projects";
import { GradientType, isMobileDevice } from "../../../state/AppState";
import MobileProjectContent from "./MobileProjectContent.vue";
import DesktopProjectContent from "./DesktopProjectContent.vue";
import { computed } from "vue";

interface DesktopProjectProps {
  color: GradientType;
  information: ProjectInfo;
}
const props = defineProps<DesktopProjectProps>();

const pillColor = computed(() => (isMobileDevice.value ? "light" : "dark"));
</script>

<template>
  <div class="project-container" :class="[props.color]">
    <div class="project-header">
      <h3 class="project-title">{{ information.title }}</h3>
      <div class="project-technologies">
        <div class="scroll-text-I">
          <AppPill
            v-for="technology in information.technologies"
            :key="technology.name"
            :name="technology.name"
            :should-hide-text="isMobileDevice"
            :icon-name="technology.iconName"
            :color="pillColor"
          />
        </div>
        <div class="scroll-text-II" aria-hidden="true">
          <AppPill
            v-for="technology in information.technologies"
            :key="technology.name"
            :name="technology.name"
            :should-hide-text="isMobileDevice"
            :icon-name="technology.iconName"
            :color="pillColor"
          />
        </div>
      </div>
    </div>
    <div class="project-content">
      <MobileProjectContent
        v-if="isMobileDevice"
        :information="props.information"
      />
      <DesktopProjectContent v-else :information="props.information" />
      <div class="project-aside">
        <p v-if="!isMobileDevice" class="project-description">
          {{ information.description }}
        </p>
        <div class="project-buttons-container">
          <DarkButton
            v-if="information.codeTo"
            text="Code"
            icon-name="github"
          />
          <SimpleButton
            text="Run"
            :class="{ 'to-right': !information.codeTo }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-container {
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  &.blue {
    background-image: $blue-gradient-opacity-145;
  }
  &.pink {
    background-image: $pink-gradient-opacity-145;
  }
  &.orange {
    background-image: $orange-gradient-opacity-145;
  }
  @media screen and (max-width: $breackpoint-small) {
    padding: 0;
    &.blue,
    &.pink,
    &.orange {
      background-image: none;
    }
  }
  & .project-header {
    display: flex;
    gap: 3.25rem;
    align-items: center;
    margin-bottom: 30px;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    & .project-title {
      text-wrap: nowrap;
    }
    & .project-technologies {
      overflow: hidden;
      display: flex;
      position: relative;
      white-space: nowrap;
      align-items: end;
      height: 45px;
      width: 100%;
      mask: $white-mask;
      -webkit-maskmask: $white-mask;

      & .scroll-text-I,
      & .scroll-text-II {
        display: flex;

        gap: 10px;
        width: fit-content;
        animation: scrollText 12s infinite linear;
      }
      & .scroll-text-I {
        margin-right: 10px;
      }
    }
  }
  & .project-content {
    display: flex;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    & .project-aside {
      width: 40%;
      gap: 20px;
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width: $breackpoint-medium) {
        width: 100%;
        padding-left: 0;
      }
      & .project-buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
.to-right {
  left: 100%;
  transform: translateX(-100%);
}
@keyframes scrollText {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
