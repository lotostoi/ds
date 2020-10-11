<template>
  <div class="conteiner" id="app" data-app>
    <ds-header></ds-header>
    <router-view></router-view>
  </div>
</template>

<script>
import DsHeader from "@/components/ds-header";

export default {
  components: {
    DsHeader,
  },
};
</script>>

<style lang="scss">
#app {
  overflow: hidden;
  // background-color: var(--v-background-base) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
