<script setup lang="ts">
import { ref } from "vue";

import AppPill from "../AppPill.vue";
import DarkButton from "../AppButtons/DarkButton.vue";
import SimpleButton from "../AppButtons/SimpleButton.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

import { ProjectInfo } from "../../../content/Projects";

interface MobileProjectProps {
  information: ProjectInfo;
}
const props = defineProps<MobileProjectProps>();

const isOverlayExpanded = ref<boolean>(false);

const projectImage = getImgPath(props.information.image) ?? null;

function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}.jpg`);
}

function toggleOverlayStatus(): void {
  isOverlayExpanded.value = !isOverlayExpanded.value;
}
</script>

<template>
  <div class="project-container">
    <h3 class="project-title">{{ information.title }}</h3>
    <div class="project-technologies">
      <AppPill
        v-for="technology in information.technologies"
        :key="technology.name"
        :iconName="technology.iconName"
        color="light"
      />
    </div>
    <div class="project-image" @click="toggleOverlayStatus">
      <div class="overlay" :class="{ 'full-overlay': isOverlayExpanded }">
        <p class="project-description">
          {{ information.description }}
        </p>
        <div class="icon-container">
          <SvgIcon name="arrow" color="white" />
        </div>
      </div>
      <img class="image" :src="projectImage" />
    </div>
    <div class="project-buttons-container">
      <DarkButton text="Code" iconName="github" />
      <SimpleButton text="View project" />
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
    cursor: pointer;
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
      padding: 10% 15px 10px 15px;
      gap: 10px;
      &.full-overlay {
        height: 125%;
        & .project-description {
          display: inline;
          position: absolute;
          width: calc(100% - 30px);
          top: calc(62.5% - 10px);
          left: 50%;
          transform: translate(-50%, -50%);
        }
        & .icon-container {
          transform: rotate(180deg);
        }
      }
      & .project-description {
        color: $white;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      & .icon-container {
        margin: 5px 0;
        width: 100%;
        display: flex;
        justify-content: center;
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
