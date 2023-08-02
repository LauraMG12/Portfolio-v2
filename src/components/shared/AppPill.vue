<script setup lang="ts">
import { IconTypes } from "./SvgIcon/SvgIconHelper";
import SvgIcon from "./SvgIcon/SvgIcon.vue";
import { isSmallDevice } from "@/state/AppState";
import { computed } from "vue";

interface AppPillProps {
  name?: string;
  iconName?: IconTypes;
  color: "dark" | "light";
}
const props = defineProps<AppPillProps>();
const iconSize = computed(() =>
  isSmallDevice.value ? { width: 30, height: 30 } : undefined
);
</script>

<template>
  <div class="pill-container" :class="[props.color]">
    <SvgIcon v-if="props.iconName" :name="props.iconName" :size="iconSize" />
    <p v-if="props.name" class="pill-text">{{ props.name }}</p>
  </div>
</template>

<style scoped lang="scss">
.pill-container {
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: fit-content;
  @media screen and (max-width: $breackpoint-medium) {
    padding: 5px 15px;
  }
  &.dark {
    background-color: $grey-dark;
    color: $white;
  }
  &.light {
    background-color: $grey-light;
    color: $black;
  }
  .pill-text {
    font-size: $font-size-p-mobile;
  }
}
</style>
