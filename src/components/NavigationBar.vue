<script setup lang="ts">
import { ref } from "vue";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import { IconTypes } from "./shared/SvgIcon/SvgIconHelper";

const sections = ref([
  { id: 0, title: "Projects" },
  { id: 1, title: "Technologies" },
  { id: 2, title: "Experience" },
  { id: 3, title: "About" },
  { id: 4, title: "Contact" },
]);
</script>

<template>
  <nav class="navigation">
    <SvgIcon :name="IconTypes.Logo" class="logo" />
    <div class="navigation-items">
      <p v-for="section in sections" :key="section.id" class="item">
        {{ section.title }}
      </p>
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
    & .item {
      color: $grey;
      &:hover {
        cursor: pointer;
        color: $black;
      }
    }
  }
}
</style>
