import { http } from "./http"

export const all = async () => {
    let { data } = await http.get("/getPhoto")
    return data
}

export const deleteById = async (id) => {
    let { data } = await http.delete(`/del/${id}`)
    return data
}