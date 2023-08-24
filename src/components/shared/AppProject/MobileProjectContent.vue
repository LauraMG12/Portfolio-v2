<script setup lang="ts">
import { ref } from "vue";

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
  <div class="project-image" @click="toggleOverlayStatus">
    <div class="overlay" :class="{ 'full-overlay': isOverlayExpanded }">
      <p class="project-description">
        {{ information.description }}
      </p>
    </div>
    <div class="icon-container">
      <SvgIcon name="arrow" color="white" />
    </div>
    <img alt="project image" class="image" :src="projectImage" />
  </div>
</template>

<style scoped lang="scss">
.project-image {
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
    bottom: 8px;
    left: 0;
    justify-content: center;
    transition: $transform-transition-05;
    --webkit-transition: $transform-transition-05;
    @media screen and (max-width: $breackpoint-small) {
      bottom: 5px;
    }
  }
  & .overlay {
    position: absolute;
    background: $dark-gradient;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    height: 135%;
    transition: $transform-transition-05;
    --webkit-transition: $transform-transition-05;
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
      transition: $basic-transition-05;
      --webkit-transition: $basic-transition-05;
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
      @media screen and (max-width: $breackpoint-small) {
        top: 20%;
      }
    }
  }
}
</style>
