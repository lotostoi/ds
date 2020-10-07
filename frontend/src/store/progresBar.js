 // module to control values of progress bar

const progresBar = {
    namespaced: true,
    state: {
        show: false,
        valueProgresBar: 0
    },
    getters: {
        show: state => state.show,
        valueProgresBar: state => state.valueProgresBar,
    },
    mutations: {
        changeShow(state, value) { 
            state.show = value
           
        },
        changeValueProgresBar(state, value) { 
            state.valueProgresBar = value
            console.log(state.valueProgresBar)
        },
    },
    actions: {
        showON({ commit}) { 
            commit('changeShow', true)
        },
        showOFF({ commit}) { 
            commit('changeShow', false)
        },
        valProgBar({ commit }, val) { 
            commit('changeValueProgresBar', val)
        }
    }

}

export default progresBar