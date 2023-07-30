<script setup lang="ts">
import { computed, ref } from "vue";
import DarkButton from "./shared/AppButtons/DarkButton.vue";
import LightButton from "./shared/AppButtons/LightButton.vue";
import { GradientType } from "./shared/AppButtons/LightButton.vue";
import { IconTypes } from "./shared/SvgIcon/SvgIconHelper";

interface AppHighlights {
  text: string;
  color: GradientType;
}
const highlights: AppHighlights[] = [
  { text: "Passionate", color: "blue" },
  { text: "Creative", color: "pink" },
  { text: "Methodical", color: "orange" },
];
const homeContent = ref<HTMLDivElement | null>(null);
const homeContentHeight = computed(
  () => `${homeContent.value?.clientHeight}px`
);
const highlightsIndex = ref<number>(0);
setInterval(() => {
  if (highlightsIndex.value < highlights.length - 1) {
    highlightsIndex.value++;
  } else {
    highlightsIndex.value = 0;
  }
}, 2500);
</script>

<template>
  <section id="homePage">
    <div class="background" />
    <div class="home-content" ref="homeContent">
      <h1>Laura Mañogil González</h1>
      <div class="subtitle">
        <div
          class="subtitle-highlight"
          :class="[`${highlights[highlightsIndex].color}-highlight`]"
        >
          <h2>
            {{ highlights[highlightsIndex].text }}
          </h2>
        </div>
        <h2>front-end developer</h2>
      </div>
      <div class="buttons-container">
        <DarkButton text="LinkedIn" :icon-name="IconTypes.LinkedIn" />
        <LightButton
          text="Contact"
          :gradient-color="highlights[highlightsIndex].color"
        />
      </div>
    </div>
    <div class="transition" />
  </section>
</template>

<style scoped lang="scss">
#homePage {
  grid-column: 1/-1;
  grid-row: 1/2;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url("../assets/home-background.jpg"), $grey-light 50%;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
  .home-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(50vh - (v-bind(homeContentHeight) / 2));
    gap: 50px;
    white-space: nowrap;
    @media screen and (max-width: $breackpoint-small) {
      gap: 35px;
    }
    & .subtitle {
      display: flex;
      flex-direction: row;

      width: 100%;
      justify-content: center;

      @media screen and (max-width: $breackpoint-small) {
        flex-direction: column;
        align-items: center;
      }

      & .subtitle-highlight {
        width: 220px;
        margin-right: 0.95rem;
        text-align: end;
        @media screen and (max-width: $breackpoint-small) {
          margin-right: 0.55rem;
          width: 37vmin;
          text-align: center;
        }
        @media screen and (max-width: $breackpoint-large) {
          width: 23vmax;
        }

        & h2 {
          font-weight: $font-weight-bold;
        }
        &.blue-highlight {
          background: $blue-gradient-90;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &.pink-highlight {
          background: $pink-gradient-90;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &.orange-highlight {
          background: $orange-gradient-90;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .buttons-container {
      display: flex;
      gap: 36px;
      margin-top: 50px;
      @media screen and (max-width: $breackpoint-small) {
        width: 100%;
        flex-direction: column;
        gap: 20px;
        margin-top: 65px;
      }
    }
  }
  .transition {
    position: absolute;
    top: calc(100vh - 7rem);
    left: 0;
    height: 7rem;
    width: 100vw;
    background: $white-gradient;
  }
}
</style>
