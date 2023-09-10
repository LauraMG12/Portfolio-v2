<script setup lang="ts">
import { SubProjectInfo } from "../../../content/Projects";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { isTouchDevice } from "@/state/AppState";

interface SubProjectCardProps {
  information: SubProjectInfo;
}
const props = defineProps<SubProjectCardProps>();

const projectImage = getImgPath(props.information.image) ?? null;

function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}`);
}
</script>

<template>
  <div class="card" :class="{ colored: isTouchDevice() }">
    <img alt="project image" class="image" :src="projectImage" />
    <div class="card-content">
      <h3 class="project-title">{{ information.title }}</h3>
      <p class="project-description">
        {{ information.description }}
      </p>
    </div>
    <div class="githubIcon">
      <SvgIcon name="github" :size="{ width: 30, height: 30 }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid $grey-dark;
  transition: $basic-transition-025;
  background-color: $white;
  display: flex;
  flex-direction: column;
  position: relative;
  &.colored {
    cursor: pointer;
    transform: translate(-3px, -3px);
    & .image,
    & .card-content {
      mix-blend-mode: normal;
    }
    & .githubIcon {
      color: $blue-dark;
    }
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0px 0px $grey-dark;
      & .image,
      & .card-content {
        mix-blend-mode: normal;
      }
      & .githubIcon {
        color: $blue-dark;
      }
    }
    &:active {
      transform: translate(0, 0);
      box-shadow: 0px 0px 0px 0px $grey-dark;
    }
  }
  & .image {
    width: 100%;
    mix-blend-mode: luminosity;
  }
  & .card-content {
    background-color: $white;
    border-radius: 10px 10px 0 0;
    padding: 20px 20px 5px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translatey(-20px);
    @media screen and (max-width: $breackpoint-small) {
      gap: 10px;
      padding: 10px 10px 10px 10px;
      transform: none;
    }

    & .project-title {
      font-size: $font-size-p-desktop;
      color: $grey-dark;
      font-weight: $font-weight-bold;
      @media screen and (max-width: $breackpoint-medium) {
        font-size: $font-size-button;
      }
    }
    & .project-description {
      font-size: $font-size-small;
      color: $grey-dark;
      font-weight: $font-weight-normal;
      @media screen and (max-width: $breackpoint-medium) {
        font-size: $font-size-smallest;
      }
    }
  }
  & .githubIcon {
    align-self: end;
    transform: translate(-10px, -10px);
    background-color: $grey-light;
    padding: 5px;
    border-radius: 20px;
    & :deep(svg.icon.github) {
      transform: translate(1px, 1px);
    }
    @media screen and (max-width: $breackpoint-small) {
      position: absolute;
      transform: none;
      margin: 5px 5px 0 0;
      top: 0;
      right: 0;
    }
  }
}
</style>
