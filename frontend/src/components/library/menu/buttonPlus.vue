<template>
    <button @click="on">+</button>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    methods: {
        ...mapActions({
            on: "modWin/on",
            off: "modWin/off",
        }),
    },
};
</script>
<style lang="scss" scoped>
button {
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
</style>