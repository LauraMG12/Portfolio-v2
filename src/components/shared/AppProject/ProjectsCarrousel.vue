<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="white-overlay" />
  </div>
</template>

<style scoped lang="scss">
.container {
  //TODO: check if there is scroll bar
  width: calc(100vw - $scroll-bar-width);
  height: calc(100vh - 100px);
  padding: 30px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  & .row {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: $grey;
  }
  & .white-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      #fff 0%,
      rgba(255, 255, 255, 0.55) 29.17%,
      rgba(255, 255, 255, 0.5) 54.17%,
      rgba(255, 255, 255, 0.55) 76.56%,
      #fff 99.99%
    );
  }
}
</style>
