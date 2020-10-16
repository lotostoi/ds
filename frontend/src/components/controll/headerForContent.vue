<template>
  <div class="controll-body-header">
    <h2>Files</h2>
    <button
      @click="delSelected"
      class="trash"
      :class="allow || selected.length == 0 ? 'disabled' : ''"
      :disabled="allow || selected.length == 0"
    >
      <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      rout: this.$prefixForProxy + "/files",
      dropZone: null,
    };
  },
  methods: {
    ...mapActions({
      delSelected: "libSelected/delSelected",
    }),
  },
  computed: {
    ...mapGetters({
      selected: "libSelected/selected",
      allow: "libSelected/allow",
    }),
  },
};
</script>
<style lang="scss" scoped>
.controll-body-header {
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: $baseColor;
  & > h2 {
    display: flex;
    margin: 0 auto;
    font-size: 25px;
    color: $fontColor;
  }
  & > .trash {
    display: flex;
    margin: 0 20px 0 0;
    border: none;
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
    margin: 0 20px 0 0;
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
</style>