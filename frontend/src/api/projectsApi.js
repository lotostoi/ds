import { http } from "./http"

export const all = async () => {

    let { data } = await http.get('projects')
    return data

}
export const add = async (project) => {

    let { data } = await http.post('project/add', { project: project })
    return data

}
export const remove = async (id) => {

    let { data } = await http.get(`projects/remove/${id}`,)
    return data

}