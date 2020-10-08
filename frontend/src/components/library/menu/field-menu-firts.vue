<template>
  <div class="ds-faild-wrapper">
    <div @click="open">
      <router-link
        :to="{ name: toLink }"
        class="ds-field"
        :class="border"
        exact
        active-class="active"
      >
        <icon-triangle :rotate="show" />
        <slot></slot>
        <button @click="$emit('btnclick')">+</button>
      </router-link>
    </div>
    <field-menu-second-level
      :show="show"
      :projects="projects"
    ></field-menu-second-level>
  </div>
</template>

<script>
import FieldMenuSecondLevel from "@/components/library/menu/field-menu-second";
import IconTriangle from "@/components/library/menu/iconTriangle";

export default {
  props: {
    toLink: {
      type: String,
      required: true,
    },
    projects: {
      type: Array,
      required: true,
    },
    borderNo: {
      type: String,
    },
  },
  data: () => ({
    show: false,
  }),
  components: {
    FieldMenuSecondLevel,
    IconTriangle,
  },
  methods: {
    open() {
      if (this.projects.length > 0) {
        this.show = !this.show;
      }
    },
  },
  computed: {
    border() {
      return this.borderNo === "top"
        ? "top"
        : this.borderNo === "bot"
        ? "bot"
        : this.borderNo === "left"
        ? "left"
        : this.borderNo === "right"
        ? "right"
        : "";
    },
  },
};
</script>
<style lang="scss" scoped>
$timeAnim: 300ms;
.ds-faild-wrapper {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.ds-field {
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #a5a5a5;
  padding: 10px;
  text-decoration: none;

  & > &:hover {
    background-color: rgb(41, 40, 40);
  }
  &.active {
    border: 1px solid black;
    color: rgb(250, 201, 111);
    &.top {
      border-top: none;
    }
    &.bot {
      border-bottom: none;
    }
    &.left {
      border-left: none;
    }
    &.right {
      border-right: none;
    }
  }


  & > button {
    width: 30px;
    border-style: solid dotted dashed none;
    height: 30px;
    margin-left: auto;
    background-color: #161616;
    border: 1px solid black;
    color: #a5a5a5 !important;
    outline: none;
    &:hover {
      background-color: #181818;
    }
    &:active {
      transform: scale(0.9);
    }
  }
}
</style>