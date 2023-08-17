import { ref } from "vue";

export type GradientType = "blue" | "pink" | "orange";

/* RESPONSIVE */
const mediumBreackpoint = 992;
const smallBreackpoint = 576;

export const isSmallDevice = ref(window.innerWidth < mediumBreackpoint);
export const isMobileDevice = ref(window.innerWidth < smallBreackpoint);

window.addEventListener("resize", () => {
  isSmallDevice.value = window.innerWidth < mediumBreackpoint;
  isMobileDevice.value = window.innerWidth < smallBreackpoint;
});

/* NAVIGATION */
export const isMobileNavigationOpened = ref<boolean>(false);
export function toggleNavigationState(): void {
  isMobileNavigationOpened.value = !isMobileNavigationOpened.value;
}
