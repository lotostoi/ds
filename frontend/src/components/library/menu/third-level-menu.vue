<template>
<main-template-menu :borderNo="borderNo" :toLink="toLink" class="second">
    <template v-slot:title>
        <div class="count">5</div>
        {{ title }}
    </template>

    <div>
        <slot> </slot>
    </div>
</main-template-menu>
</template>

<script>
import MainTemplateMenu from "@/components/library/menu/mainTemplate";
import IconTriangle from "@/components/library/menu/iconTriangle";
import ButtonPlus from "@/components/library/menu/buttonPlus";

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        toLink: {
            type: String,
            default: "#",
        },
        borderNo: {
            type: String,
        },
    },
    components: {
        MainTemplateMenu,
        IconTriangle,
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.second {
    padding-left: 15px;
    box-sizing: border-box;
}

img {
    margin-left: auto;
    margin-right: 10px;
}

.count {
    width: 22px;
    height: 22px;
    border: 1px solid #606060;
    display: flex;
    margin-right: 10px;
    font-size: 11px;
    justify-content: center;
    align-items: center;
    color: #b4b4b4;
}
</style>
