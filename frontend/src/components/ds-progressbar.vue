<template>
  <b-progress
    :value="valueProgresBar"
    height="2px"
    :max="100"
    :show-progress="true"
    animated
    style="width: 100%"
  ></b-progress>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      show: "progresBar/show",
      valueProgresBar: "progresBar/valueProgresBar",
    }),
  },
};
</script>