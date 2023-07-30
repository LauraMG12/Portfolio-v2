<script setup lang="ts">
import { IconTypes } from "../SvgIcon/SvgIconHelper";
import SvgIcon from "../SvgIcon/SvgIcon.vue";

interface TechnologyPillProps {
  name: string;
  iconName: IconTypes;
}
const props = defineProps<TechnologyPillProps>();
</script>

<template>
  <div class="pill-container">
    <SvgIcon :name="props.iconName" />
    <p class="pill-text">{{ props.name }}</p>
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
  .pill-text {
    color: $white;
    font-size: $font-size-p-mobile;
  }
}
</style>
