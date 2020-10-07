import 'fontawesome-4.7/css/font-awesome.min.css' // Ensure you are using css-loader
import Vue from 'vue'

import Vuetify, {
    VProgressLinear,
    VDialog,
    VBtn,
    VCard,
    VCardText,
    VDivider,
    VCardActions,
    VSpacer,
    VCardTitle,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VIcon,
} from 'vuetify/lib'



Vue.use(Vuetify, {
    components: {
        VProgressLinear,
        VDialog,
        VBtn,
        VCard,
        VCardText,
        VDivider,
        VCardActions,
        VSpacer,
        VCardTitle,
        VExpansionPanels,
        VExpansionPanel,
        VExpansionPanelHeader,
        VExpansionPanelContent,
        VIcon,
    },

})

const opts = {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
    theme: {
        options: {
            customProperties: true
        },
        dark: true,
        themes: {
            dark: {
                background: '#00a86b'
            },
            light: {
                background: '#d0f0c0'
            }
        }
    }, 

    icons: {
        iconfont: 'fa4',
    },

}

export default new Vuetify(opts)

