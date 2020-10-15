import Vue from "vue"

import { prefixForProxy } from "@/addtools/globalVar"

const del = prefixForProxy + '/del'

function getIndexById(arr, id) {
    return arr.findIndex(e => e._id.toString() === id.toString())
}

const library = {

    namespaced: true,
    state: {
        // буфер для выделенных картинок
        selected: [],
        // блокировка кнопки удаления 
        allow: false
    },
    getters: {
        selected: state => state.selected,
        allow: state => state.allow
    },
    mutations: {
        // selected 
        addToSelected(state, obj) {
            let { selected } = state
            selected.push(obj)
        },

        allSelected(state, arr) {
            state.selected = arr
        },

        delSelected(state) {
            state.selected = []

        },

        setTrueAllow(state) {
            state.allow = true
        },

        setFalseAllow(state) {
            state.allow = false
        }


    },
    actions: {


        // selected 
        addToSelected({ dispatch, commit, rootGetters }, id) {

            let arr = rootGetters['libPictures/pictures']

            let index = getIndexById(arr, id)

            dispatch('libPictures/changeByIndex', { idx: index, field: 'active', value: true }, { root: true })


            let getImageId = rootGetters['libPictures/getImageId']

            commit('addToSelected', getImageId(id))
        },


        allSelected({ rootGetters, commit }) {

            let arr = rootGetters['libPictures/pictures']

            arr = arr.map(p => {
                Vue.set(p, 'active', true)
                return p
            })
            commit('allSelected', arr)
        },

        clearSelected({ dispatch, commit }) {


            dispatch('libPictures/changeAll', { field: 'active', value: false }, { root: true })

            commit('delSelected')
        },

        async delSelected({ state, commit, dispatch }) {
            // block button delete(icon trash)
            commit('setTrueAllow')
            // show progres bar
            dispatch('progresBar/showON', null, { root: true })

            let arr = state.selected
            // sending requests to server to delete images    
            await (async () => {
                return new Promise(async (resolve, reject) => {

                    for (let i = 0; i <= arr.length; i++) {

                        let prog = ((i + 2) * 100) / arr.length;

                        let el = arr[i]

                        if (el) {

                            let res = await fetch(del + "/" + el._id, {
                                method: "DELETE",
                                'Content-type': "application/json",
                            })

                            let data = await res.json()
                            if (data.status === "Succes") {
                                dispatch('progresBar/valProgBar', prog, { root: true })

                            } else {
                                reject(console.error(`Error - ${data.status}`))
                            }
                        } else {
                            resolve(console.log(`Objects wore deleted.`))

                        }
                    }
                })
            })()

            if (arr.length === 1) {
                setTimeout(() => {
                    // hideing progres bar
                    dispatch('progresBar/showOFF', null, { root: true })
                    // set velue progress bar 0
                    dispatch('progresBar/valProgBar', 0, { root: true })
                }, 200)
            } else {
                dispatch('progresBar/showOFF', null, { root: true })
                dispatch('progresBar/valProgBar', 0, { root: true })
            }

            // clear buffer selected
            commit('delSelected')
            // get new cotalog of images
            dispatch('libPictures/getPictures', null, { root: true })
            // unblock button delete (icon trash)
            commit('setFalseAllow')
            // update right side bar 
            dispatch('libImageDetails/getImage', null, { root: true })

        },
    }
}
export default library