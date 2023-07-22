<script setup lang="ts"></script>

<template>
  <section id="homePage">
    <div class="background" />
    <div class="home-content"></div>
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
    background: url("../assets/homeBackground.jpg"), #ebebeb 50%;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
  .transition {
    position: absolute;
    top: calc(100vh - 11rem);
    left: 0;
    height: 11rem;
    width: 100vw;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  }
}
</style>
