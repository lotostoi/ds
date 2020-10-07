<template>
  <ul class="ds-prodjects-ul">
    <div v-for="(project, i) in projects" :key="i">
      <li v-if="true">
        <svg
          width="13.516"
          height="15.446"
          viewBox="0 0 13.516 15.446"
          class="triangle"
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
        <a href="#">{{ project.title }}</a>
      </li>
    </div>
  </ul>
</template>

<script>
let delay = async (delay = 0) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
export default {
  data: () => ({
    delay: 500,
  }),
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    async show() {
      let el = this.$el;
      let height;
      if (!el.tagName) return;
      if (this.show) {
        await delay();
        await Promise.resolve(
          (el.style.height = "auto") && el.classList.add("forMeasuring")
        );
        await delay(10);
        height = el.clientHeight;
        await Promise.resolve(
          (el.style.height = `0`) && el.classList.remove("forMeasuring")
        );
        await delay(10);
        el.style.transition = `height ${this.delay}ms`;
        await delay(10);
        el.style.height = `${height}px`;
        console.log(height);
        await delay(this.delay + 10);
        el.style.height = `auto`;
      } else {
        height = el.clientHeight;
        await Promise.resolve((el.style.height = `${height}px`));
        await delay(10);
        el.style.height = `0`;
        await delay(this.delay + 10);
        el.style.transition = `height ${0}ms`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$timeAnim: 800ms;
ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 0;

  & > div {
    width: 100%;
    & > li {
      margin: 10px 0;
      width: 100%;
      display: flex;
      padding: 0 0 0 15px;
      height: auto;
      min-height: 25px;
      align-items: center;
      & > a {
        display: flex;
        width: 80%;
        text-decoration: none;
        font-size: 13px;
        color: #a5a5a5;
        line-height: 22px;
        text-align: left;
      }
      & > img {
        margin-left: auto;
        width: 22px;
        height: 22px;
      }
    }
  }
}

ul.forMeasuring {
  position: absolute;
  visibility: hidden;
  height: auto;
}

.triangle {
  margin-right: 16px;
  transition: rotate $timeAnim linear;
  & > g > g > path.a {
    stroke: none;
    transition: fill $timeAnim linear;
  }
  & > g > g > path.b {
    fill: #505050;
  }
}
.triangle-active {
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
</style>