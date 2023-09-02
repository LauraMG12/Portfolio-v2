<script setup lang="ts">
import { ProjectInfo } from "../../../content/Projects";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

interface SubProjectCardProps {
  information: ProjectInfo;
}
const props = defineProps<SubProjectCardProps>();

const projectImage = getImgPath(props.information.image) ?? null;

function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}`);
}
</script>

<template>
  <div class="card">
    <img alt="project image" class="image" :src="projectImage" />
    <div class="card-content">
      <h3 class="project-title">{{ information.title }}</h3>
      <p class="project-description">
        {{ information.description }}
      </p>
      <div class="project-technologies">
        <div
          class="project-technology"
          v-for="technology in information.technologies"
          :key="technology.iconName"
        >
          <SvgIcon
            :name="technology.iconName"
            :size="{ height: 40, width: 40 }"
            color="currentColor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid $grey-dark;
  display: flex;
  flex-direction: column;
  transition: $basic-transition-025;
  background-color: $white;

  &:hover {
    @media (hover: hover) {
      cursor: pointer;
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0px 0px $grey-dark;
      & .image {
        mix-blend-mode: normal;
      }
    }
  }
  & .image {
    width: 100%;
    mix-blend-mode: luminosity;
  }
  & .card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    & .project-title {
      font-size: 1.5rem;
      color: $grey-dark;
      font-weight: 700;
    }
    & .project-description {
      font-size: 1rem;
      color: $grey-dark;
      font-weight: 400;
    }
    & .project-technologies {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      & svg.icon {
        mix-blend-mode: luminosity;
      }
    }
  }
}
</style>
