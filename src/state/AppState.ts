import { ref } from "vue";

const mediumBreackpoint = 992;

export const isSmallDevice = ref(window.innerWidth < mediumBreackpoint);

window.addEventListener(
  "resize",
  () => (isSmallDevice.value = window.innerWidth < mediumBreackpoint)
);
