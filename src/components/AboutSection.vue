<script setup lang="ts">
import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import AppPill from "./shared/AppPill.vue";
import DarkButton from "./shared/AppButtons/DarkButton.vue";

// TODO: extract (duplicated)
const aboutImage = getImgPath("about");

function getImgPath(imageName: string) {
  return require(`@/assets/${imageName}.jpeg`);
}
</script>

<template>
  <section id="aboutSection">
    <h2 class="section-title">About</h2>
    <div class="about-header">
      <h3>Laura Mañogil González</h3>
      <div class="about-subheader">
        <AppPill
          name="Front-end developer"
          color="light"
          class="frontend-pill"
        />
        <SvgIcon name="linkedin" />
        <SvgIcon name="github" />
      </div>
    </div>
    <div class="about-content">
      <div class="image-container">
        <img class="image" :src="aboutImage" />
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <DarkButton text="Download CV" icon-name="download" />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#aboutSection {
  grid-column: 1/-1;
  grid-row: 3/4;

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
