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
      </div>
      <div class="icon-container">
        <SvgIcon name="arrow" color="white" />
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
    & .icon-container {
      margin: 5px 0;
      width: 100%;
      position: absolute;
      display: flex;
      bottom: 10px;
      left: 0;
      justify-content: center;
      transition: transform 0.5s ease;
    }
    & .overlay {
      position: absolute;
      background: $dark-gradient;
      top: 50%;
      left: 0;
      width: 100%;
      display: flex;
      height: 135%;
      transition: transform 0.5s ease;
      &.full-overlay {
        transform: translateY(-60%);
        & .project-description {
          top: calc(62.5% - 10px);
          display: inline;
        }
        & ~ .icon-container {
          transform: rotate(540deg);
        }
      }
      & .project-description {
        transition: all 0.5s ease;
        width: calc(100% - 50px);
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $white;
        overflow: hidden;
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
