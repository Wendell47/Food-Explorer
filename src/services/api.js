import axios from "axios"

export const api = axios.create({
    baseURL:"https://food-explorer-api-n53a.onrender.com" || "http://localhost:3333"
})

