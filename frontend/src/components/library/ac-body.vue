<template>
  <div class="lib-body">
    <div class="lib-content-cont">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      cRange: "libScale/cRange",
      delSelected: "libSelected/delSelected",
    }),
  },
  computed: {
    ...mapGetters({
      allow: "libSelected/allow",
      selected: "libSelected/selected",
      show: "progresBar/show",
      valueProgresBar: "progresBar/valueProgresBar",
    }),
  },
};
</script>

<style lang="scss" scoped>
.prog-color {
  background-color: lightblue;
}

.lib-body {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  align-items: flex-start;
  overflow: hidden;
}

.lib-body-header {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;

  & > .lib-dell-All {
    margin: 0 20px 0 auto;
    background-color: transparent;
    outline: none;
    padding: 5px;
    color: white;

    & > i {
      font-size: 30px;
      color: rgb(214, 91, 91);
      margin: 0 20px 0 20px;
    }

    &:hover > i {
      color: rgb(196, 52, 52);
    }

    &:active > i {
      color: rgb(109, 33, 33);
    }
  }

  & > .disabled {
    margin: 0 20px 0 auto;
    background-color: transparent;
    outline: none;
    padding: 5px;
    color: white;
    cursor: not-allowed;

    & > i {
      font-size: 30px;
      color: rgb(133, 115, 115);
      margin: 0 20px 0 20px;
    }

    &:hover > i {
      color: rgb(133, 115, 115);
    }

    &:active > i {
      color: rgb(133, 115, 115);
    }
  }
}

.lib-content-cont {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #131313;
}
</style>
