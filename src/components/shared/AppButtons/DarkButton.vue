<script setup lang="ts">
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconTypes } from "../SvgIcon/SvgIconHelper";

interface AppButtonProps {
  text: string;
  iconName: IconTypes;
}
const props = defineProps<AppButtonProps>();
</script>

<template>
  <button class="button">
    <SvgIcon class="button-icon" v-if="props.iconName" :name="props.iconName" />
    <p class="button-text">{{ props.text }}</p>
  </button>
</template>

<style lang="scss">
.button {
  position: relative;
  display: flex;
  height: 45px;
  width: 185px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  transition: $basic-transition-025;
  background-color: black;
  color: $white;
  &:hover {
    cursor: pointer;
    background-color: $grey-dark;
  }
  & .button-icon {
    margin-right: 25px;
  }
  & .button-text {
    font-size: $font-size-button;
    font-weight: $font-weight-bold;
  }
}
</style>
