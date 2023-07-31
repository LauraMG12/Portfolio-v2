<script setup lang="ts">
import { isSmallDevice, GradientType } from "../../../state/AppState";
import { ProjectInfo } from "../../../content/Projects";

import DesktopProject from "./DesktopProject.vue";
import MobileProject from "./MobileProject.vue";

interface AppProjectProps {
  color: GradientType;
  information: ProjectInfo;
}
const props = defineProps<AppProjectProps>();
</script>

<template>
  <MobileProject v-if="isSmallDevice" :information="props.information" />
  <DesktopProject
    v-else
    :color="props.color"
    :information="props.information"
  />
</template>
