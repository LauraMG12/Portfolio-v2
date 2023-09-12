<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";
import { isStartingAnimationFinished } from "@/state/AppState";

const isShowingLogo = ref<boolean>(true);
setInterval(() => {
  isShowingLogo.value = false;
}, 1000);

setInterval(() => {
  isStartingAnimationFinished.value = true;
}, 1500);
</script>
<template>
  <section id="startingView">
    <Transition name="pop">
      <div class="logo-wrapper" v-if="isShowingLogo">
        <SvgIcon name="logo" />
      </div>
    </Transition>
  </section>
</template>

<style scoped lang="scss">
#startingView {
  height: 100dvh;
  width: 100dvw;
  background-color: $white;
  position: relative;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  & .logo-wrapper {
    transform: scale(5);
  }
}
.pop {
  &-leave-active {
    animation: pop-logo 0.5s;
  }
}
@keyframes pop-logo {
  0% {
    transform: scale(5);
  }
  50% {
    transform: scale(6);
  }
  100% {
    transform: scale(0);
  }
}
</style>
