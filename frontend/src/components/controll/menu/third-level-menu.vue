<template>
  <main-template-menu
    :borderNo="borderNo"
    :toLink="toLink"
    :content="content"
    class="second"
  >
    <template v-slot:title>
      <div class="count">5</div>
      {{ title }}
    </template>

    <div>
      <slot> </slot>
    </div>
  </main-template-menu>
</template>

<script>
import MainTemplateMenu from "@/components/controll/menu/mainTemplate";
import IconTriangle from "@/components/controll/menu/iconTriangle";
import ButtonPlus from "@/components/controll/menu/buttonPlus";

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
    content: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MainTemplateMenu,
    IconTriangle,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.second {
  padding-left: 7px;
  box-sizing: border-box;
}

img {
  margin-left: auto;
  margin-right: 10px;
}

.count {
  width: 22px;
  height: 22px;
  border: 1px solid #606060;
  display: flex;
  margin-right: 10px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  color: #b4b4b4;
}
</style>
