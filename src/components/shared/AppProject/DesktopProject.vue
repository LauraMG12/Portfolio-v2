<script setup lang="ts">
import AppPill from "../AppPill.vue";
import DarkButton from "../AppButtons/DarkButton.vue";
import SimpleButton from "../AppButtons/SimpleButton.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

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
            name="github"
            :size="{ height: 45, width: 45 }"
            color="white"
          />
          <SvgIcon
            name="redirect"
            :size="{ height: 50, width: 50 }"
            color="white"
          />
        </div>
        <img alt="project image" class="image" :src="projectImage" />
      </div>
      <div class="project-aside">
        <p class="project-description">
          {{ information.description }}
        </p>
        <div class="project-buttons-container">
          <DarkButton text="Code" iconName="github" />
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
        @media (hover: hover) {
          .overlay {
            opacity: 1;
          }
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
        display: flex;
        opacity: 0;
        justify-content: center;
        align-items: center;
        gap: 70px;
        color: white;
        transition: $opacity-transition-02;
        --webkit-transition: $opacity-transition-02;
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
