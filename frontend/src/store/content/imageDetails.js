
const imageDetails = {

    namespaced: true,

    state: {
        // объект изображения для колонки  "информация о картинке"
        imageDetails: {},
    },

    getters: {
        imageDetails: state => state.imageDetails,
    },

    mutations: {
        // imageDetails
        getImage(state, obj) {

            state.imageDetails = obj
        }
    },

    actions: {

        // imageDetails
        getImage({ commit, rootGetters }, id) {

            let getImageId = rootGetters['libPictures/getImageId']

            if (getImageId(id)) {
                commit('getImage', getImageId(id))
            } else {
                commit('getImage', null)
            }

        },
    }
}

export default imageDetails