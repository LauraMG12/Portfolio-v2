<script setup lang="ts">
import { computed } from "vue";

import { sections } from "../content/Navigation";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";

import { isSmallDevice, scrollToSection } from "../state/AppState";

import {
  isMobileNavigationOpened,
  toggleNavigationState,
} from "@/state/AppState";

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 55, height: 35 } : undefined
);
</script>

<template>
  <nav class="navigation">
    <div @click="scrollToSection('homePage')">
      <SvgIcon name="logo" :size="mobileIconSize" />
    </div>
    <div v-if="isSmallDevice" @click="toggleNavigationState()">
      <!-- TODO: on close, keep scroll position -->
      <SvgIcon :name="isMobileNavigationOpened ? 'close' : 'navigation'" />
    </div>
    <div v-else class="navigation-items">
      <div
        v-for="section in sections"
        :key="section.id"
        class="item-container"
        :class="{ selected: section.isSelected }"
        @click="scrollToSection(section.goTo)"
      >
        <p class="item" :class="{ selected: section.isSelected }">
          {{ section.title }}
        </p>
      </div>
    </div>
  </nav>
  <div
    v-if="isMobileNavigationOpened && isSmallDevice"
    class="mobile-navigation"
  >
    <div
      v-for="section in sections"
      :key="section.id"
      class="item-container"
      @click="scrollToSection(section.goTo)"
    >
      <p
        class="item"
        @click="isMobileNavigationOpened = false"
        :class="{ selected: section.isSelected }"
      >
        {{ section.title }}
      </p>
    </div>
  </div>
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
    margin: 0 25px 0 15px;
  }

  & .navigation-items {
    width: 450px;
    display: flex;
    justify-content: space-between;
    & .item-container {
      padding: 5px 10px;
      border-radius: 20px;
      gap: 45px;
      &:hover {
        cursor: pointer;
      }
      &.selected {
        background-color: $grey-light;
      }
      & .item {
        color: $grey;
        font-size: $font-size-p-mobile;
        &.selected {
          color: $black;
        }
        &:hover {
          @media (hover: hover) {
            color: $black;
          }
        }
      }
    }
  }
}
.mobile-navigation {
  width: 100vw;
  height: calc(100vh - $navigation-height);
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: $white;

  padding: 0 50px;
  @media screen and (max-width: $breackpoint-small) {
    padding: 0 20px;
  }

  & .item-container {
    padding: 15px 0;
    width: 100%;
    border-bottom: 1px solid $grey-light;
    &:first-child {
      margin-top: 30px;
    }
    & .item {
      color: $grey;
      font-size: $font-size-p-mobile;
      &:hover {
        cursor: pointer;
        @media (hover: hover) {
          color: $black;
        }
      }
      &.selected {
        color: $black;
      }
    }
  }
}
</style>
