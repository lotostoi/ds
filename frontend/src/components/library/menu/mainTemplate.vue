<template>
  <div class="ds-faild-wrapper">
    <div class="ds-field">
      <div @click="open">
        <slot name="icon">
          <icon-triangle :rotate="rotate" />
        </slot>
      </div>
      <router-link
        v-if="toLink"
        @click="open"
        :to="{ name: toLink }"
        class="ds-field-link"
        exact
        active-class="active"
      >
        <slot name="title"></slot>
      </router-link>
      <div v-else class="title">
        <slot name="title"></slot>
      </div>

      <slot name="button">
        <button-plus />
      </slot>
    </div>
    <div class="fields">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
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
    content: null,
    delay: 400,
    flag: false,
  }),
  components: {
    IconTriangle,
    ButtonPlus,
  },
  mounted() {
    this.content = this.$el.querySelector(".fields > div").innerHTML;
  },
  methods: {
    open() {
      let content = this.$el.querySelector(".fields > div").innerHTML;
      if (!this.flag && content) {
        this.show = !this.show;
      }
    },
    calcDelay(height) {
      if (height < 300) return 0.5 * this.delay;
      if (height > 300 && height < 600) return 1 * this.delay;
      if (height > 600 && height < 900) return 2 * this.delay;
      if (height > 900) return 3 * this.delay;
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
        await Promise.resolve(
          (el.style.height = `0`) && el.classList.remove("forMeasuring")
        );
        await delay(10);
        el.style.transition = `height ${this.calcDelay(height)}ms`;
        await delay(100);
        el.style.height = `${height}px`;
        await delay(this.calcDelay(height) + 10);
        el.style.height = `auto`;
        this.flag = false;
      } else {
        height = el.clientHeight;

        el.style.transition = `height ${this.calcDelay(height)}ms`;
        await Promise.resolve((el.style.height = `${height}px`));
        await delay(10);
        el.style.height = `0`;
        await delay(this.calcDelay(height) + 10);
        el.style.transition = `height ${0}ms`;
        this.flag = false;
      }
    },
  },

  computed: {
    rotate() {
      if (this.content && this.show) {
        return "show";
      } else if (this.content) {
        return "default";
      } else {
        return "block";
      }
    },
    border() {
      let classes = ["top", "bottom", "left", "right", "all"];
      return classes.filter((cl) => this.borderNo.includes(cl)).split(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
$timeAnim: 300ms;

.ds-faild-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.ds-field {
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #a5a5a5;
  padding: 10px 10px 10px 5px;
  text-decoration: none;

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

  &.all {
    border: none;
  }

  &:hover {
    color: $textHover;
  }

  &.active {
    border: 1px solid black;
    color: $textActive;

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

    &.all {
      border: none;
    }
  }
}

.ds-field-link {
  color: #a5a5a5;
  text-decoration: none;
  display: flex;
  text-align: left;
  justify-content: flex-start;

  &:hover {
    color: $textHover;
  }
  &.active {
    color: $textActive;
  }
}

.title {
  display: flex;
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
