import Vue from "vue"

import getData from "@/server/server"

import { prefixForProxy } from "@/addtools/globalVar"

const link = prefixForProxy + '/getPhoto'

//const del = prefixForProxy + '/del'

function getIndexById(arr, id) {
    return arr.findIndex(e => e._id.toString() === id.toString())
}


const images = {

    namespaced: true,


    state: {
        // исходный массив картинок
        pictures: [],
    },
    getters: {
        pictures: state => state.pictures,

        getImageId: state => id => state.pictures.find(e => e._id == id),
    },

    mutations: {
        // pictures
        getPictures(state, data) {
            state.pictures = data
        },

        delAllPictures(state) {
            state.pictures = []
        },

        dellOnePicture(state, id) {
            console.log(state.pictures.splice(getIndexById(state.pictures, id)))
        },

        hidenPicture(state, id) {
            Vue.set(
                state.pictures[getIndexById(state.pictures, id)],
                'show',
                false
            )
        },

        // for module selected 

        changeByIndex(state, { idx, field, value }) {
            Vue.set(state.pictures[idx], field, value)
        },

        changeAll(state, { field, value }) {
            state.pictures.forEach(p => { p.active && Vue.set(p, field, value) })
        }
    },

    actions: {

        // pictures
        async getPictures({ commit }) {
            let data = []
            try {
                let data = await getData(link, 'POST')
                commit('getPictures', data)
            } catch (e) {
                data = []
                //  commit('statusError', true)
                commit('getPictures', data)
                console.log(`Data reciven error: ${e}`)
            }
        },

        changeByIndex({ commit }, obj) {
            commit('changeByIndex', obj)
        },
        
        changeAll({ commit }, obj) {
            commit('changeAll', obj)
        },



        /*     async delete({ state }) {
    
                let { pictures } = state
    
                for (const el of pictures) {
                    await fetch(del + "/" + el._id, {
                        method: "DELETE",
                        'Content-type': "application/json",
                    }).then(data => data.json())
                        .then(data => console.log(data))
                }
    
            }, */

    }

}

export default images 