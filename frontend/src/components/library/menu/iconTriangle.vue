<template>
    <svg
      width="13.516"
      height="15.446"
      viewBox="0 0 13.516 15.446"
      class="triangle"
      :class="rotate ? 'triangle-active' : ''"
    >
      {{ rotate }}
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
</template>

<script>
export default {
  props: {
      rotate:{
          type: Boolean,
          default: false
      }
  }
};
</script>
<style lang="scss" scoped>
$timeAnim: 300ms;
.triangle {
  margin-right: 10px;
  transition: transform $timeAnim linear;
  & > g > g > path.a {
    stroke: none;
    transition: fill $timeAnim linear;
  }
  & > g > g > path.b {
    fill: #505050;
  }
}
.triangle-active {
  margin-right: 10px;
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