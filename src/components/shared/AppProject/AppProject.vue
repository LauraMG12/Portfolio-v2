<script setup lang="ts">
import DarkButton from "../AppButtons/DarkButton.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

import { IconTypes } from "../SvgIcon/SvgIconHelper";
import { GradientType } from "../../../state/AppState";

interface AppProjectProps {
  color: GradientType;
}
const props = defineProps<AppProjectProps>();
</script>

<template>
  <div class="project-container" :class="[props.color]">
    <div class="project-header">
      <h3 class="project-title">Project title</h3>
      <div class="project-technologies"></div>
    </div>
    <div class="project-content">
      <div class="project-image">
        <div class="overlay">
          <SvgIcon :name="IconTypes.GitHub" :size="{ height: 55, width: 55 }" />
          <SvgIcon
            :name="IconTypes.Redirect"
            :size="{ height: 50, width: 50 }"
          />
        </div>
        <img class="image" src="@/assets/home-background.jpg" />
      </div>
      <div class="project-aside">
        <p class="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div class="project-buttons-container">
          <DarkButton text="Code" :iconName="IconTypes.GitHub" />
          <DarkButton text="View project" :simple="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-container {
  width: 100%;
  padding: 1.5rem;
  &.blue {
    background-image: $blue-gradient-opacity-180;
  }
  &.pink {
    background-image: $pink-gradient-opacity-180;
  }
  &.orange {
    background-image: $orange-gradient-opacity-180;
  }
  & .project-header {
    height: 80px;
  }
  & .project-content {
    display: flex;
    & .project-image {
      position: relative;
      width: 60%;
      height: 400px;
      border-radius: 20px;
      overflow: hidden;
      &:hover {
        .overlay {
          display: flex;
        }
      }

      & .image {
        width: 100%;
        height: 100%;
      }
      & .overlay {
        position: absolute;
        background: $dark-overlay;
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        gap: 70px;
      }
    }
    & .project-aside {
      width: 40%;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .project-buttons-container {
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
