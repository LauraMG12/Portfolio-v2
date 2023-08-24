<script setup lang="ts">
import { computed } from "vue";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconType } from "../SvgIcon/SvgIconHelper";

import { isSmallDevice } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  iconName?: IconType;
}
const props = defineProps<AppButtonProps>();

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 20, height: 20 } : undefined
);
</script>

<template>
  <button class="button">
    <SvgIcon
      v-if="props.iconName"
      :name="props.iconName"
      :size="mobileIconSize"
    />
    <p class="button-text">
      {{ props.text }}
    </p>
  </button>
</template>

<style scoped lang="scss">
.button {
  background-color: transparent;
  color: $black;
  border: 2px solid $black;
  padding: 10px 20px;
  width: fit-content;
  gap: 20px;
  &:hover {
    @media (hover: hover) {
      background-color: $white;
    }
  }
  & .button-text {
    font-size: $font-size-p-mobile;
  }
}
</style>
