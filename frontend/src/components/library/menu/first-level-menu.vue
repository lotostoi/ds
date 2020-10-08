<template>
  <main-template-menu :borderNo="borderNo" :toLink="toLink">
    <template v-slot:title>{{ title }}</template>
    <template v-slot:fields><slot></slot></template>
  </main-template-menu>
</template>

<script>
import MainTemplateMenu from "@/components/library/menu/mainTemplate";
import IconTriangle from "@/components/library/menu/iconTriangle";
import ButtonPlus from "@/components/library/menu/buttonPlus";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    toLink: {
      type: String,
      default: "#",
    },
    borderNo: {
      type: String,
    },
  },
  data: () => ({
    show: false,
    delay: 500,
    flag: false,
  }),
  components: {
    MainTemplateMenu,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>