<template>
<main-template-menu :borderNo="borderNo" :toLink="toLink" :content="content">
    <template v-slot:title>{{ title }}</template>
    <div>
        <slot></slot>
    </div>
</main-template-menu>
</template>

<script>
import MainTemplateMenu from "@/components/controll/menu/mainTemplate";
import IconTriangle from "@/components/controll/menu/iconTriangle";
import ButtonPlus from "@/components/controll/menu/buttonPlus";

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
        content: {
            type: Boolean,
            default: false
        },
    },
    components: {
        MainTemplateMenu,
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>
