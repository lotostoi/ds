<template>
  <div class="controll-body-footer">
    <div class="changeScale">
      <label for="range">Scale :</label>
      <input
        type="range"
        name="randg"
        id="range"
        @input="cRange({ val: $event.target.value })"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      cRange: "libScale/cRange",
    }),
  },
};
</script>
<style  lang="scss" scoped>
.controll-body-footer {
  width: 100%;
  display: flex;
  padding: 0 20px;
  min-height: 50px;
  border-top: 1px solid black;
  align-items: center;
  box-sizing: border-box;
}

.changeScale {
  display: flex;
  margin-left: auto;

  & > label {
    color: $fontColor;
  }

  & > input {
    margin-left: 10px;
  }
}
</style>