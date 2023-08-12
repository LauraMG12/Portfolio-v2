import { ref } from "vue";

export type GradientType = "blue" | "pink" | "orange";

/* RESPONSIVE */
const mediumBreackpoint = 992;

export const isSmallDevice = ref(window.innerWidth < mediumBreackpoint);

window.addEventListener(
  "resize",
  () => (isSmallDevice.value = window.innerWidth < mediumBreackpoint)
);

/* NAVIGATION */
export const isMobileNavigationOpened = ref<boolean>(false);
export function toggleNavigationState(): void {
  isMobileNavigationOpened.value = !isMobileNavigationOpened.value;
}
