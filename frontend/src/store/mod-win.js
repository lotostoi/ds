export default {
    namespaced: true,
    state: {
        show: false
    },
    getters: {
        show: state => state.show
    },
    mutations: {

        on: state => state.show = true,

        off: state => state.show = false,

    },
    actions:{

        on: ({ commit }) => commit('on'),
        
        off: ({ commit }) => commit('off'),
        
    }

}