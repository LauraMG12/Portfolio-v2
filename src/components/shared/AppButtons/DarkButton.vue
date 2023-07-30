<script setup lang="ts">
import { computed } from "vue";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconTypes } from "../SvgIcon/SvgIconHelper";

import { isSmallDevice } from "../../../state/AppState";

interface AppButtonProps {
  text: string;
  iconName: IconTypes;
  simple?: boolean;
}
const props = defineProps<AppButtonProps>();

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 20, height: 20 } : undefined
);
</script>

<template>
  <button class="button" :class="{ simple: props.simple }">
    <SvgIcon
      class="button-icon"
      v-if="props.iconName && !props.simple"
      :name="props.iconName"
      :size="mobileIconSize"
    />
    <p class="button-text" :class="{ simple: props.simple }">
      {{ props.text }}
    </p>
  </button>
</template>

<style lang="scss">
.button {
  background-color: black;
  color: $white;
  &.simple {
    background-color: transparent;
    color: $black;
    text-decoration: underline;
  }
  &:hover:not(.simple) {
    background-color: $grey-dark;
  }
  & .button-icon {
    margin-right: 25px;
    @media screen and (max-width: $breackpoint-medium) {
      margin-right: 20px;
    }
  }
}
</style>
