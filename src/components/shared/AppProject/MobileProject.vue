<script setup lang="ts">
import TechnologyPill from "./TechnologyPill.vue";
import DarkButton from "../AppButtons/DarkButton.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

import { IconTypes } from "../SvgIcon/SvgIconHelper";
import { ProjectInfo } from "../../../content/Projects";

interface MobileProjectProps {
  information: ProjectInfo;
}
const props = defineProps<MobileProjectProps>();

const projectImage = getImgPath(props.information.image) ?? null;

function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}.jpg`);
}
</script>

<template>
  <div class="project-container">
    <h3 class="project-title">{{ information.title }}</h3>
    <div class="project-technologies">
      <TechnologyPill
        v-for="technology in information.technologies"
        :key="technology.name"
        :name="technology.name"
        :iconName="technology.iconName"
      />
    </div>
    <div class="project-image">
      <div class="overlay">
        <p class="project-description">
          {{ information.description }}
        </p>
        <SvgIcon :name="IconTypes.Arrow" />
      </div>
      <img class="image" :src="projectImage" />
    </div>
    <div class="project-buttons-container">
      <DarkButton text="Code" :iconName="IconTypes.GitHub" />
      <DarkButton text="View project" :simple="true" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .project-technologies {
    display: flex;
    gap: 10px;
  }
  & .project-image {
    position: relative;
    width: 100%;
    aspect-ratio: auto;
    max-height: 450px;
    border-radius: 20px;
    overflow: hidden;
    & .image {
      width: 100%;
      height: 100%;
    }
    & .overlay {
      position: absolute;
      background: $dark-gradient;
      bottom: 0;
      left: 0;
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      padding: 45px 20px 20px 20px;
      gap: 15px;
      & .project-description {
        color: $white;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  & .project-buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
