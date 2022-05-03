import axios from "axios"

const path = "/material-type/"

const get = async () => await axios.get(path)

const add = async (payload) => await axios.post(path, payload)

const _delete = async (id) => await axios.delete(path + id)

export const materialTypeService = {
    get,
    add,
    delete: _delete,
}