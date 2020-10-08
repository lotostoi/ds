<template>
  <div class="ds-faild-wrapper">
    <div>
      <router-link
        @click="open"
        :to="{ name: toLink }"
        class="ds-field"
        :class="border"
        exact
        active-class="active"
      >
        <div @click="open">
          <slot name="icon">
            <icon-triangle :rotate="show" />
          </slot>
        </div>
        <slot name="title"></slot>
        <slot name="button">
          <button-plus />
        </slot>
      </router-link>
    </div>
    <div class="fields">
      <slot name="fields" tag="div"> </slot>
    </div>
  </div>
</template>

<script>
import FieldMenuSecondLevel from "@/components/library/menu/field-menu-second";
import IconTriangle from "@/components/library/menu/iconTriangle";
import ButtonPlus from "@/components/library/menu/buttonPlus";

let delay = async (delay = 0) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });

export default {
  props: {
    toLink: {
      type: String,
      required: true,
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
    FieldMenuSecondLevel,
    IconTriangle,
    ButtonPlus,
  },
  methods: {
    open() {
      if (this.fields.length > 0 && !this.flag) {
        this.show = !this.show;
      }
    },
  },
  watch: {
    async show() {
      if (this.flag) return;

      this.flag = true;
      let el = this.$el.querySelector(".fields");
      let height;
      if (!el.tagName) return;
      if (this.show && el.tagName) {
        await Promise.resolve(
          (el.style.height = "auto") && el.classList.add("forMeasuring")
        );
        await delay(10);
        height = el.clientHeight;
        console.log(height);
        await Promise.resolve(
          (el.style.height = `0`) && el.classList.remove("forMeasuring")
        );
        await delay(10);
        el.style.transition = `height ${this.delay}ms`;
        await delay(10);
        el.style.height = `${height}px`;
        await delay(this.delay + 10);
        el.style.height = `auto`;
        this.flag = false;
      } else {
        height = el.clientHeight;
        await Promise.resolve((el.style.height = `${height}px`));
        await delay(10);
        el.style.height = `0`;
        await delay(this.delay + 10);
        el.style.transition = `height ${0}ms`;
        this.flag = false;
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
}
.fields {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 0;
  // border-bottom: 1px solid black;
}

.forMeasuring {
  position: absolute;
  visibility: hidden;
  height: auto;
}
</style>