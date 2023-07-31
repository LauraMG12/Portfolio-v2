<script setup lang="ts">
import { IconTypes } from "../SvgIcon/SvgIconHelper";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { isSmallDevice } from "@/state/AppState";
import { computed } from "vue";

interface TechnologyPillProps {
  name: string;
  iconName: IconTypes;
}
const props = defineProps<TechnologyPillProps>();

const iconSize = computed(() =>
  isSmallDevice ? { width: 35, height: 35 } : undefined
);
</script>

<template>
  <div class="pill-container">
    <SvgIcon :name="props.iconName" :size="iconSize" />
    <p v-if="!isSmallDevice" class="pill-text">{{ props.name }}</p>
  </div>
</template>

<style scoped lang="scss">
.pill-container {
  padding: 5px 10px;
  border-radius: 20px;
  background-color: $grey-dark;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: fit-content;
  @media screen and (max-width: $breackpoint-medium) {
    background-color: $grey-light;
    padding: 5px 15px;
  }
  .pill-text {
    color: $white;
    font-size: $font-size-p-mobile;
  }
}
</style>
