import axios from "axios"

export const http = axios.create({
    baseURL: '/rout', //isDevelopment ? '/rout' : '/',
    timeout: 10000,
})