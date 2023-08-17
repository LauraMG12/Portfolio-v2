<script setup lang="ts">
import { computed } from "vue";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconType } from "../SvgIcon/SvgIconHelper";

import { isSmallDevice } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  iconName?: IconType;
  href?: string;
}
const props = defineProps<AppButtonProps>();

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 20, height: 20 } : undefined
);
</script>

<template>
  <a
    unselectable="on"
    target="_blank"
    role="button"
    class="button"
    :href="props.href"
  >
    <SvgIcon
      v-if="props.iconName"
      :name="props.iconName"
      :size="mobileIconSize"
    />
    <p class="button-text">
      {{ props.text }}
    </p>
  </a>
</template>

<style scoped lang="scss">
.button {
  background-color: black;
  color: $white;
  padding: 10px 25px;
  width: fit-content;
  gap: 20px;
  transition: $basic-transition-025;

  &:hover {
    @media (hover: hover) {
      background-color: $grey-dark;
    }
  }
}
</style>
