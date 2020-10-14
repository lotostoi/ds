import templateFieldProject from "@/store/menu-projects/projectTemplate"
import * as projectsApi from "@/api/projectsApi.js"

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
        }

    },
    actions: {
        async addProject({ commit }, title) {
            let project = templateFieldProject(title)

            try {
                await projectsApi.add(project)
                commit('addProject', project)

            } catch (e) {
                console.log(e);
            }
        }
    }
};
