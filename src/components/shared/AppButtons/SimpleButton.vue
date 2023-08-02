<script setup lang="ts">
import { computed } from "vue";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconTypes } from "../SvgIcon/SvgIconHelper";

import { isSmallDevice } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  iconName?: IconTypes;
}
const props = defineProps<AppButtonProps>();

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 20, height: 20 } : undefined
);
</script>

<template>
  <button class="button">
    <SvgIcon
      class="button-icon"
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
  text-decoration: underline;
  width: fit-content;

  & .button-icon {
    margin-right: 25px;
    @media screen and (max-width: $breackpoint-medium) {
      margin-right: 20px;
    }
  }
  & .button-text {
    font-size: $font-size-p-mobile;
  }
}
</style>
