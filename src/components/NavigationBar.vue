<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "./shared/SvgIcon.vue";
import { IconTypes } from "./shared/SvgIconHelper";

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
      <span v-for="section in sections" :key="section.id">
        {{ section.title }}
      </span>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  margin: 0 50px;
  height: 65px;
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
    & span {
      color: #666;
      font-family: Inter, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
  }
}
</style>
