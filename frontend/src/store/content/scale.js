 // module to change scale of images in the library

const scale = {

    namespaced: true,
    state: {
        // значение ползунка маштабирования
        range: 50,
    },
    getters: {
        range: state => state.range,

    },
    mutations: {
        // range
        changeRange(state, newValue) {
            state.range = newValue
        },
    },
    actions: {
        // range
        cRange({ commit }, { val }) {
            commit('changeRange', val)
        },

    },
}

export default scale