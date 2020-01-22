import axios from "axios"

const CONFIG = {
    baseURL: process.env.VUE_APP_APIHOST
}
const AXIOS_INSTANCE = axios.create(CONFIG)

export default AXIOS_INSTANCE