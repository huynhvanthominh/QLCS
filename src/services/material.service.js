import axios from "axios"

const path = "/material/"

const get = async () => {
    return await axios.get(path);
}
export const materialService = {
    get
}