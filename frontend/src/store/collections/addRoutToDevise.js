import { prefixForProxy } from "@/addtools/globalVar"

const path = prefixForProxy + "/addDevise"

export default {
    namespaced: true,

    state: {
        // arr of routes
        routes: [],

        // switch on/off model window
        onOff: false
    },
    getters: {

        routes: state => state.routes,

        onOff: state => state.onOff

    },
    mutations: {

        addRout(state, devise) {
            state.routes.push(devise)
        },

        getRoutes(state, routes) {
            state.routes = routes
        },

        switchOnOff(state) {
            state.onOff = !state.onOff
        }
    },
    actions: {

        switchOnOff({ commits }) {
            commits('switchOnOff')
        },

        async creatRout({ commits }, data) {

         
     

            try {

                let res = await fetch(
                    path,
                    {
                        method: "POST",
                        body: data

                    }
                )

                let data = await res.json()

                if (data.status === "ok") {
                    console.log('Rout was added...')
                } else {
                    console.log("Error")
                }


            } catch (e) {
                console.error(e)
            }

        }

    }
}