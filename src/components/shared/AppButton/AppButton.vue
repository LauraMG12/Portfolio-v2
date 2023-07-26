<script setup lang="ts">
import { AppButtonType, GradientType } from "./AppButtonHelper";

import SvgIcon from "../SvgIcon/SvgIcon.vue";
import { IconTypes } from "../SvgIcon/SvgIconHelper";

interface AppButtonProps {
  text: string;
  type: AppButtonType;
  iconName?: IconTypes;
  gradientColor?: GradientType;
}
const props = defineProps<AppButtonProps>();
</script>

<template>
  <div class="button-wrapper">
    <div
      class="background-gradient"
      :class="[`${props.gradientColor}-background`]"
      v-if="props.type === 'white'"
    />
    <button
      class="button"
      :class="[props.type, `${props.gradientColor}-border`]"
    >
      <SvgIcon
        class="button-icon"
        v-if="props.iconName"
        :name="props.iconName"
      />
      <p class="button-text">{{ props.text }}</p>
    </button>
  </div>
</template>

<style lang="scss">
.button-wrapper {
  position: relative;
  .background-gradient {
    width: 260px;
    height: 105px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16.25rem;
    filter: blur(17.5px);
    position: absolute;
    &.blue-background {
      background: linear-gradient(
        172deg,
        rgba(0, 124, 240, 0.15) 0%,
        rgba(0, 223, 216, 0.15) 100%
      );
    }
    &.pink-background {
      background: linear-gradient(
        172deg,
        rgba(121, 40, 202, 0.1) 0%,
        rgba(255, 0, 128, 0.1) 100%
      );
    }
    &.orange-background {
      background: linear-gradient(
        172deg,
        rgba(255, 77, 77, 0.1) 0%,
        rgba(249, 203, 40, 0.1) 100%
      );
    }
  }
  .button {
    position: relative;
    display: flex;
    height: 45px;
    width: 185px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    transition: $basic-transition-025;
    &:hover {
      cursor: pointer;
    }
    &.dark {
      background-color: $black;
      color: $white;
      &:hover {
        background-color: $grey-dark;
      }
    }
    &.white {
      background-color: $white;
      color: $black;
      &:hover {
        &.blue-border {
          background-image: $blue-gradient-90;
        }
        &.pink-border {
          background-image: $pink-gradient-90;
        }
        &.orange-border {
          background-image: $orange-gradient-90;
        }
        .button-text {
          color: $white;
        }
      }
    }
    & .button-icon {
      margin-right: 25px;
    }
    & .button-text {
      font-size: $font-size-button;
      font-weight: $font-weight-bold;
    }
  }
}
</style>
