<template>
<v-expansion-panels :disabled="disabled" multiple class="primary">
    <v-expansion-panel class="primary">
        <v-expansion-panel-header color="primary">
            <router-link to="/content" class="prop-panel-mainLink" active-class="active" exact>{{title}}</router-link>
            <template v-slot:actions>
                <v-icon class="prop-panel-sizeIcon">$expand</v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <slot></slot>
        </v-expansion-panel-content>
    </v-expansion-panel>
</v-expansion-panels>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        // panel: [0, 1],
        disabled: false,
        readonly: false,
    }),
};
</script>

<style lang="scss">
.theme--light.v-expansion-panels .v-expansion-panel {
    background-color: $baseColor !important;
    line-height: 20px !important;

}

.v-expansion-panel--active>.v-expansion-panel-header {
    min-height: 45px !important;
}

.v-expansion-panel-header {
    padding: 5px 24px ! important;
}

.prop-panel-sizeIcon {
    font-size: 10px !important;
    color: white ! important;
}

.prop-panel-mainLink {
    text-decoration: none;
    color: $fontColor;
    text-align-last: left;
}
</style>
