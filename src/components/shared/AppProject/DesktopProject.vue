<script setup lang="ts">
import AppPill from "../AppPill.vue";
import DarkButton from "../AppButtons/DarkButton.vue";
import SimpleButton from "../AppButtons/SimpleButton.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

import { IconTypes } from "../SvgIcon/SvgIconHelper";
import { ProjectInfo } from "../../../content/Projects";
import { GradientType } from "../../../state/AppState";

interface DesktopProjectProps {
  color: GradientType;
  information: ProjectInfo;
}
const props = defineProps<DesktopProjectProps>();

const projectImage = getImgPath(props.information.image) ?? null;

function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}.jpg`);
}
</script>

<template>
  <div class="project-container" :class="[props.color]">
    <div class="project-header">
      <h3 class="project-title">{{ information.title }}</h3>
      <div class="project-technologies">
        <AppPill
          v-for="technology in information.technologies"
          :key="technology.name"
          :name="technology.name"
          :iconName="technology.iconName"
          color="dark"
        />
      </div>
    </div>
    <div class="project-content">
      <div class="project-image">
        <div class="overlay">
          <SvgIcon
            :name="IconTypes.GitHub"
            :size="{ height: 55, width: 55 }"
            class="white-icon"
          />
          <SvgIcon
            :name="IconTypes.Redirect"
            :size="{ height: 50, width: 50 }"
          />
        </div>
        <img class="image" :src="projectImage" />
      </div>
      <div class="project-aside">
        <p class="project-description">
          {{ information.description }}
        </p>
        <div class="project-buttons-container">
          <DarkButton text="Code" :iconName="IconTypes.GitHub" />
          <SimpleButton text="View project" />
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
  &.blue {
    background-image: $blue-gradient-opacity-145;
  }
  &.pink {
    background-image: $pink-gradient-opacity-145;
  }
  &.orange {
    background-image: $orange-gradient-opacity-145;
  }
  & .project-header {
    height: 50px;
    display: flex;
    gap: 3.25rem;
    align-items: center;
    margin-bottom: 30px;
    & .project-technologies {
      display: flex;
      gap: 10px;
    }
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
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .project-buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
