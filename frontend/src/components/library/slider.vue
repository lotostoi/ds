<template>
<div class="lib-slider-content"></div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";

import {
    getContent
} from "@/addtools/addFunctions";

export default {
    data() {
        return {};
    },

    methods: {
        ...mapActions({}),
    },
    computed: {
        ...mapGetters({}),
    },
};
</script>

<style lang="scss" scoped>
.lib-slider-content {
    padding: 20px;
    display: flex;
    height: 100%;
    width: 100%;
    transition: background-color 0.5s linear;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content: space-around;
    align-items: flex-start;
    background-color: rgb(65, 51, 51);
}

.lib-cont-img {
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    &>span {
        margin: 10px;
        color: white;
    }
}

.lib-img {
    user-select: all;
    margin: auto;
    width: 30px;
    height: 30px;
}

.lib-img-active {
    outline: 5px solid burlywood;
}

.lib-img[lazy="loaded"] {
    width: 100%;
    height: 100%;
}

.lib-body-active {
    background-color: #363636fb;
}
</style>
