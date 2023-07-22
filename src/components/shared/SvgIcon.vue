<script setup lang="ts">
import { computed } from "vue";
import {
  IconTypes,
  SvgIconDefaultSettings,
  transformSvgPropsFormat,
} from "./SvgIconHelper";

interface SvgIconProps {
  name: IconTypes;
  size?: SvgIconDefaultSettings;
}

const props = defineProps<SvgIconProps>();

const iconPath = getImgPath(props.name) ?? null;
const settings = computed(() =>
  transformSvgPropsFormat(props.name, props.size)
);

function getImgPath(iconName: IconTypes) {
  return require(`@/assets/${iconName}.svg`);
}
</script>

<template>
  <img
    v-if="iconPath"
    :src="iconPath"
    :style="{
      width: settings.width,
      height: settings.height,
    }"
  />
</template>

<style scoped lang="scss"></style>
