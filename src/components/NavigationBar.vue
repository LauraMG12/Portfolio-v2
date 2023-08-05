<script setup lang="ts">
import { computed } from "vue";

import { sections } from "../content/Navigation";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";

import { isSmallDevice } from "../state/AppState";

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 55, height: 35 } : undefined
);
</script>

<template>
  <nav class="navigation">
    <SvgIcon name="logo" :size="mobileIconSize" />
    <div v-if="isSmallDevice">
      <SvgIcon name="navigation" />
    </div>
    <div v-else class="navigation-items">
      <div
        v-for="section in sections"
        :key="section.id"
        class="item-container"
        :class="{ selected: section.isSelected }"
      >
        <p class="item" :class="{ selected: section.isSelected }">
          {{ section.title }}
        </p>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  margin: 0 50px;
  height: $navigation-height;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: $breackpoint-small) {
    margin: 0 15px;
  }

  & .navigation-items {
    width: 500px;
    display: flex;
    justify-content: space-between;
    & .item-container {
      padding: 5px 10px;
      border-radius: 20px;
      &:hover {
        cursor: pointer;
      }
      &.selected {
        background-color: $grey-light;
      }
      & .item {
        color: $grey;
        &.selected {
          color: $black;
        }
        &:hover {
          color: $black;
        }
      }
    }
  }
}
</style>
