<template>
<main-template-menu :borderNo="borderNo" :toLink="toLink" class="second">
    <template v-slot:title>{{ title }}</template>
    <template v-slot:button><img src="@/assets/img/icons/settings_icon.svg" alt="" /></template>
    <div>
        <slot></slot>
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
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.second {
    padding-left: 10px;
    box-sizing: border-box;
}

img {
    margin-left: auto;
    margin-right: 5px;
}
</style>
