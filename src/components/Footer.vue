<script setup lang="ts">
import { computed } from "vue";
import { isSmallDevice } from "@/state/AppState";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 55, height: 35 } : undefined
);
</script>

<template>
  <div id="footer">
    <SvgIcon name="logo" :size="mobileIconSize" />
    <p class="name">Laura Mañogil González</p>
    <div class="contact">
      <p class="footer-contact">LinkedIn</p>
      <p class="footer-contact">laura.lmg12@gmail.com</p>
      <p class="footer-contact">GitHub</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
#footer {
  width: 100vw;
  height: 15rem;
  background-color: $grey-light;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  .name {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .contact {
    margin-top: 20px;
    display: flex;
    width: 60%;
    justify-content: space-around;

    & > * {
      cursor: pointer;
    }
    @media screen and (max-width: $breackpoint-small) {
      $font-size: $font-size-smallest;
      width: 100%;
      padding: 0 15px;
    }
  }
}
</style>
