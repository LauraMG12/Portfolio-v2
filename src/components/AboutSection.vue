<script setup lang="ts">
import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import AppPill from "./shared/AppPill.vue";
import DarkButton from "./shared/AppButtons/DarkButton.vue";

import { about } from "../content/About";

// TODO: extract (duplicated)
const aboutImage = getImgPath(about.imageName);

function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}.jpeg`);
}
</script>

<template>
  <section id="aboutSection">
    <h2 class="section-title">{{ about.sectionTitle }}</h2>
    <div class="about-header">
      <h3>{{ about.name }}</h3>
      <div class="about-subheader">
        <AppPill :name="about.position" color="light" class="frontend-pill" />
        <a
          unselectable="on"
          href="https://www.linkedin.com/in/laura-ma%C3%B1ogil-gonz%C3%A1lez-30489b14a/"
          target="_blank"
          ><SvgIcon name="linkedin"
        /></a>
        <a
          unselectable="on"
          href="https://github.com/LauraMG12"
          target="_blank"
        >
          <SvgIcon name="github" />
        </a>
      </div>
    </div>
    <div class="about-content">
      <div class="image-container">
        <img alt="professional image" class="image" :src="aboutImage" />
      </div>
      <div class="content">
        <p>
          {{ about.about }}
        </p>
        <DarkButton text="Download CV" icon-name="download" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#aboutSection {
  display: flex;
  flex-direction: column;
  .about-header {
    display: flex;
    align-items: baseline;
    margin-bottom: 35px;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      gap: 15px;
      margin-bottom: 15px;
      align-items: center;
    }
    & .about-subheader {
      display: flex;

      & .frontend-pill {
        height: 25px;
        margin: 0 45px;

        @media screen and (max-width: $breackpoint-medium) {
          margin: 0 45px 0 0;
        }
        @media screen and (max-width: $breackpoint-small) {
          margin: 0 15px 0 0;
        }
      }
      & :deep(.linkedin) {
        margin-right: 30px;
        @media screen and (max-width: $breackpoint-small) {
          margin: 0 10px 0 0;
        }
      }
    }
  }
  .about-content {
    display: flex;
    width: 100%;
    @media screen and (max-width: $breackpoint-medium) {
      flex-direction: column;
      align-items: center;
    }
    & .image-container {
      position: relative;
      width: 40%;
      aspect-ratio: 4/3;
      border-radius: 20px;
      overflow: hidden;
      margin-right: 50px;
      @media screen and (max-width: $breackpoint-medium) {
        margin-right: 0;
        margin-bottom: 15px;
        width: 60%;
      }
      @media screen and (max-width: $breackpoint-small) {
        width: 100%;
      }
      & .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & .content {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 50px;
      @media screen and (max-width: $breackpoint-medium) {
        align-items: center;
        text-align: center;
        gap: 25px;
        width: 100%;
      }
    }
  }
}
</style>
