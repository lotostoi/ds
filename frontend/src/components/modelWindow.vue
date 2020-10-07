<template>
<div class="cont-modal-window" :class="show ?  'cont-modal-window-active': ''">
    <transition leave-active-class="leave" enter-active-class="enter">
        <div v-if="show" class="model-window">
            <slot></slot>
        </div>
    </transition>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";

export default {
    computed: {
        ...mapGetters({
            show: "modWin/show",
        }),
    },
};
</script>

<style lang="scss" scoped>
$timeout: 700ms;

@keyframes leave {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 1;
        transform: translateY(-800px);
    }
}

@keyframes enter {
    from {
        opacity: 1;
        transform: translateY(-800px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.enter {
    animation: enter $timeout;
}

.leave {
    animation: leave $timeout linear;
}

.cont-modal-window {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(128, 128, 128, 0);
    top: 0;
    left: 0;
    z-index: 500;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    pointer-events: none;
    transition: background-color $timeout linear;
}

.cont-modal-window-active {
    pointer-events: auto;
    background-color: rgba(128, 128, 128, 0.315);
}

.model-window {
    margin-top: 30vh;
    pointer-events: auto;
    display: flex;
    min-width: 320px;
    // border: 1px solid rgb(82, 81, 81);
    z-index: 501;
}
</style>
