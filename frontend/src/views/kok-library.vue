<template>
  <div class="lib-contener">
    <lib-left-side-bar></lib-left-side-bar>

    <lib-body>
      <transition
        enter-active-class="sl-enter"
        leave-active-class="sl-leave"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </lib-body>

    <lib-right-side-bar></lib-right-side-bar>
  </div>
</template>

<script>
import LibRightSideBar from "@/components/library/rightSideBar";
import LibLeftSideBar from "@/components/library/leftSideBar";
import LibBody from "@/components/library/ac-body";

export default {
  components: {
    LibRightSideBar,
    LibLeftSideBar,
    LibBody,
  },
};
</script>

<style lang="scss" scoped>
.lib-contener {
  display: flex;
  width: 100%;

  background-color: $baseColor;
  height: calc(100vh - #{$heightHeader});
}
</style>
