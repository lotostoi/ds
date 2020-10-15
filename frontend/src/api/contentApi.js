import { http } from "./http"

export const all = async () => {

    let { data } = await http.get("/getPhoto")
    return data

}