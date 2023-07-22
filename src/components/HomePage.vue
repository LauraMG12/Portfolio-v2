<script setup lang="ts">
import AppButton from "./shared/AppButton/AppButton.vue";
import { IconTypes } from "./shared/SvgIcon/SvgIconHelper";
</script>

<template>
  <section id="homePage">
    <div class="background" />
    <div class="home-content">
      <h1>Laura Mañogil González</h1>
      <h2>
        <span class="blue-highlight">Passionate</span>&nbsp;front end developer
      </h2>
      <div class="buttons-container">
        <AppButton
          type="dark"
          text="LinkedIn"
          :icon-name="IconTypes.LinkedIn"
        />
        <AppButton type="white" text="Contact" />
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
    background: url("../assets/homeBackground.jpg"), $grey-light 50%;
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
    margin-top: 30vh;
    gap: 50px;
    .blue-highlight {
      background: $blue-gradient-90;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: $font-weight-bold;
    }
    .pink-highlight {
      background: $pink-gradient-90;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: $font-weight-bold;
    }
    .orange-highlight {
      background: $orange-gradient-90;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: $font-weight-bold;
    }
    .buttons-container {
      display: flex;
      gap: 36px;
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
