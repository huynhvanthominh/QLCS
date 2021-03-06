import axios from "axios"

const path = "/upload-file/"

const uploadImage = async (file) => {
    const formData = new FormData();
    const nameSave = editNameSave(file.name);
    formData.append("nameSave", nameSave)
    formData.append("image", file);
    return await axios.post(path + "images", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

const editNameSave = (nameFile) => {
    const tmp = nameFile.split(".");
    const type = tmp[tmp.length - 1];
    const name = tmp.splice(0, tmp.length - 1).join(".");
    const time = Date.now();
    const nameSave = name + "-" + time + "." + type;
    return nameSave
}
export const uploadFileService = {
    uploadImage
}