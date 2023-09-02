<script setup lang="ts">
import { computed } from "vue";
import { GradientType } from "../../../state/AppState";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconType } from "../SvgIcon/SvgIconHelper";

import { isSmallDevice } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  iconName?: IconType;
  color: GradientType;
}
const props = defineProps<AppButtonProps>();

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 20, height: 20 } : undefined
);
</script>

<template>
  <button class="button" :class="[props.color]">
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
  background-color: $white;
  &:hover {
    @media (hover: hover) {
      &.blue {
        background-image: $blue-gradient-90;
      }
      &.pink {
        background-image: $pink-gradient-90;
      }
      &.orange {
        background-image: $orange-gradient-90;
      }
    }
  }
  & .button-text {
    font-size: $font-size-p-mobile;
  }
}
</style>
