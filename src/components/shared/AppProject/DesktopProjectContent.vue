<script setup lang="ts">
import SvgIcon from "../SvgIcon/SvgIcon.vue";

import { ProjectInfo } from "../../../content/Projects";

interface MobileProjectProps {
  information: ProjectInfo;
}
const props = defineProps<MobileProjectProps>();

const projectImage = getImgPath(props.information.image) ?? null;
function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}`);
}
</script>

<template>
  <div class="project-image">
    <div class="overlay">
      <SvgIcon
        v-if="information.codeTo"
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
</template>

<style scoped lang="scss">
.project-image {
  position: relative;
  width: 60%;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: $breackpoint-medium) {
    width: 100%;
    max-width: 500px;
    aspect-ratio: auto;
    height: auto;
  }

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
    & :deep(.icon) {
      cursor: pointer;
    }
  }
}
</style>
