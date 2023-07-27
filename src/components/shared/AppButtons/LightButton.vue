<script setup lang="ts">
export type GradientType = "blue" | "pink" | "orange";

interface AppButtonProps {
  text: string;
  gradientColor: GradientType;
}
const props = defineProps<AppButtonProps>();
</script>

<template>
  <div class="button-wrapper">
    <div
      class="background-gradient"
      :class="[`${props.gradientColor}-background`]"
    />
    <button class="button-container">
      <div class="button">
        <p class="button-text">{{ props.text }}</p>
      </div>
      <div class="gradient" :class="[`${props.gradientColor}-gradient`]">
        <p class="button-text">{{ props.text }}</p>
      </div>
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
      background: $blue-gradient-opacity-180;
    }
    &.pink-background {
      background: $pink-gradient-opacity-180;
    }
    &.orange-background {
      background: $orange-gradient-opacity-180;
    }
  }
  .button-container {
    position: relative;
    border-radius: 10px;
    &:hover {
      .gradient {
        z-index: 3;
      }
    }
    .button-text {
      font-size: $font-size-button;
      font-weight: $font-weight-bold;
    }
    .button {
      position: relative;
      display: flex;
      height: 45px;
      width: 185px;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      background-color: $white;
      color: $black;
      z-index: 2;

      &:hover {
        cursor: pointer;
      }

      & .button-text {
        color: $black;
      }
    }
    .gradient {
      position: absolute;
      top: -1px;
      left: -1px;
      height: 47px;
      width: 187px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      z-index: 1;
      &.blue-gradient {
        background-image: $blue-gradient-180;
      }
      &.pink-gradient {
        background-image: $pink-gradient-180;
      }
      &.orange-gradient {
        background-image: $orange-gradient-180;
      }
      &:hover {
        cursor: pointer;
      }
      & .button-text {
        color: $white;
      }
    }
  }
}
</style>
