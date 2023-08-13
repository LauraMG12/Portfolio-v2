<script setup lang="ts">
import { computed } from "vue";
import { isSmallDevice } from "@/state/AppState";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";

import { footer } from "../content/Footer";

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 55, height: 35 } : undefined
);
</script>

<template>
  <div id="footer">
    <SvgIcon name="logo" :size="mobileIconSize" />
    <p class="name">{{ footer.name }}</p>
    <div class="contact">
      <p class="footer-contact">{{ footer.linkedIn }}</p>
      <p class="footer-contact">{{ footer.professionalEmail }}</p>
      <p class="footer-contact">{{ footer.gitHub }}</p>
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
    font-size: 1.3rem;
    font-weight: 700;
  }
  .contact {
    margin-top: 20px;
    display: flex;
    width: 60%;
    justify-content: space-around;

    @media screen and (max-width: $breackpoint-small) {
      width: 100%;
      padding: 0 15px;
    }
    & > p {
      cursor: pointer;
    }
  }
}
</style>
