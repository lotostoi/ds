<template>
<div class="lib-body">
    <v-progress-linear v-if="true" :value="valueProgresBar" absolute :background-opacity="0" color="prog-color"></v-progress-linear>
    <div class="lib-body-header">
        <button @click="delSelected" class="lib-dell-All" :class="allow ||  selected.length == 0  ? 'disabled' : ''" :disabled="allow ||  selected.length == 0  ">
            <i class="fa fa-trash"></i>
        </button>
    </div>
    <div class="lib-content-cont">
        <slot></slot>
    </div>
    <div class="lib-body-footer">
        <div class="changeScale">
            <label for="range">Scale :</label>
            <input type="range" name="randg" id="range" @input="cRange({val:$event.target.value})" />
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";

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
    transition: background-color 0.5s linear;

    align-items: flex-start;
}

.lib-body-header {
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;

    &>.lib-dell-All {
        margin: 0 20px 0 auto;
        background-color: transparent;
        outline: none;
        padding: 5px;
        color: white;

        &>i {
            font-size: 30px;
            color: rgb(214, 91, 91);
            margin: 0 20px 0 20px;
        }

        &:hover>i {
            color: rgb(196, 52, 52);
        }

        &:active>i {
            color: rgb(109, 33, 33);
        }
    }

    &>.disabled {
        margin: 0 20px 0 auto;
        background-color: transparent;
        outline: none;
        padding: 5px;
        color: white;
        cursor: not-allowed;

        &>i {
            font-size: 30px;
            color: rgb(133, 115, 115);
            margin: 0 20px 0 20px;
        }

        &:hover>i {
            color: rgb(133, 115, 115);
        }

        &:active>i {
            color: rgb(133, 115, 115);
        }
    }
}

.lib-content-cont {
    display: flex;
    flex-direction: column;
    height: calc(100% - 100px);
    width: 100%;
    background-color: rgb(65, 51, 51);
}

.lib-body-footer {
    width: 100%;
    display: flex;
    padding: 0 20px;
    min-height: 50px;
    border-top: 1px solid black;
    align-items: center;
}

.changeScale {
    display: flex;
    margin-left: auto;

    &>label {
        color: $fontColor;
    }

    &>input {
        margin-left: 10px;
    }
}
</style>
