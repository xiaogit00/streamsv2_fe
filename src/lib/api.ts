import axios from "axios"

export const BASE_URL = 'http://localhost:3001/trades'

export const getTrades = async () => {
    return axios.get(BASE_URL).then((res) => res.data)
}