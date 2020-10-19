import templateFieldProject from "@/store/menu-projects/projectTemplate"
import * as projectsApi from "@/api/projectsApi.js"
import Vue from "vue"
import { nanoid } from 'nanoid'
import { findById } from "@/functions/functions"


export default {
    namespaced: true,
    state: {
        projects: []
    },
    getters: {
        projects: (state) => state.projects
    },
    mutations: {
        getProjects: state => state.projects,
        addProject: (state, project) => state.projects.push(project),
        removeProject: (state, _id) => {
            let idx = state.projects.findIndex(p => p._id === _id)
            idx !== -1 && state.project.splice(idx, 1)
        },
        changeAnyField: (state, path) => {

        }


    },
    actions: {
        async addProject({ commit, state }, title) {
            let project = templateFieldProject(title)

            try {
                await projectsApi.add(project)
                commit('addProject', project)
            } catch (e) {
                console.log(e);
            }
        },
        changeAnyField({ commit, state }, { obj, id }) {

            let objForChange = findById(state.projects, id)
            //  setTimeout(() => { console.log(objForChange) }, 1000)
            Vue.set(objForChange.fields, objForChange.fields.length, { ...obj, id: nanoid() })
            commit('changeAnyField', id)
        }
    }
};


