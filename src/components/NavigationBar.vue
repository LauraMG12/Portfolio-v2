<script setup lang="ts">
import { ref } from "vue";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import { IconTypes } from "./shared/SvgIcon/SvgIconHelper";

interface SectionsInfo {
  id: number;
  title: string;
  isSelected: boolean;
}

const sections = ref<SectionsInfo[]>([
  { id: 0, title: "Projects", isSelected: false },
  { id: 1, title: "Technologies", isSelected: false },
  { id: 2, title: "Experience", isSelected: false },
  { id: 3, title: "About", isSelected: true },
  { id: 4, title: "Contact", isSelected: false },
]);
</script>

<template>
  <nav class="navigation">
    <SvgIcon :name="IconTypes.Logo" class="logo" />
    <div class="navigation-items">
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

  & .logo:hover {
    cursor: pointer;
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
