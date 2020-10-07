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
        <svg
          width="13.516"
          height="15.446"
          viewBox="0 0 13.516 15.446"
          class="triangle"
          :class="show ? 'triangle-active' : ''"
        >
          <g transform="translate(1 1.723)">
            <g transform="translate(10.5) rotate(90)">
              <path
                class="a"
                d="M 12.86159038543701 11 L 12 11 L -8.881784197001252e-16 11 L -0.8615900278091431 11 L -0.4341199994087219 10.25193023681641 L 5.565879821777344 -0.2480700016021729 L 6 -1.007779955863953 L 6.434120178222656 -0.2480700016021729 L 12.43412017822266 10.25193023681641 L 12.86159038543701 11 Z"
              />
              <path
                class="b"
                d="M 6 0 L 0 10.5 L 12 10.5 L 6 0 M 6 -2.015560150146484 L 6.868239879608154 -0.4961395263671875 L 12.86824035644531 10.00386047363281 L 13.72317981719971 11.5 L 12 11.5 L 0 11.5 L -1.723179817199707 11.5 L -0.8682403564453125 10.00386047363281 L 5.131760120391846 -0.4961395263671875 L 6 -2.015560150146484 Z"
              />
            </g>
          </g>
        </svg>
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
  & .triangle {
    margin-right: 16px;
    transition: transform $timeAnim linear;
    & > g > g > path.a {
      stroke: none;
      transition: fill $timeAnim linear;
    }
    & > g > g > path.b {
      fill: #505050;
    }
  }
  & .triangle-active {
    margin-right: 16px;
    transform: rotate(90deg);

    & > g > g > path.a {
      stroke: none;
      fill: #505050;
    }
    & > g > g > path.b {
      fill: #505050;
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