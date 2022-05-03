/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, Grid, Input, TextField } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { materialTypeService } from "../../../services/material-type.service";
import { uploadFileService } from "../../../services/upload-file.service";
import { useHistory } from "react-router-dom";
import Alert from "../../../customs/Alert-custom";
import ALERT from "../../../consts/status-alter";

const MaterialTypeAdd = () => {
    const history = useHistory();
    const [tenLoaivatchat, setTenvatchat] = useState("abc");
    const [isShow, setIsShow] = useState(true)
    const [status, setStatus] = useState(ALERT.SUCCESS)
    const [image, setImage] = useState("")
    const [file, setFile] = useState(null)
    const refFile = React.useRef();
    const handleChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0]
        setFile(file)
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function () {
            setImage(reader.result)
        };
    }

    const uploadImage = async () => {
        if (file) {
            const { data } = await uploadFileService.uploadImage(file);
            return data;
        }
        return
    }

    const handleAdd = async () => {
        const upload = await uploadImage();
        if (upload?.status) {
            const { data } = await materialTypeService.add({
                tenLoaivatchat,
                hinhanh: upload.name
            })
            if (data.affectedRows > 0) {
                setIsShow(true)
                setTimeout(() => history.push("Admin/Material-Type"), 1000)
            } else {

            }
        }
    }

    return (
        <div className="mt-4">
            <Alert status={status} isShow={isShow}>Thêm thành công</Alert>
            <div className="d-flex align-items-center">
                <div>
                    <h3>Loại vật chất</h3>
                </div>
            </div>
            <div className="border-bottom border-primary border-5" />
            <Grid container spacing={4} columns={16} className="py-4">
                <Grid item md={8} sm={16}>
                    <Card className="card-file">
                        <label className="input-file">
                            <CameraAltIcon color="primary" sx={{ fontSize: 120 }} />
                            <Input ref={refFile} onChange={e => handleChange(e)} accept="image/*" className="d-none" id="icon-button-file" type="file" />
                            <img src={image} />
                        </label>
                    </Card>
                </Grid>
                <Grid item md={8} sm={16}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item sm={16}>
                            <Box>
                                <FormControl fullWidth>
                                    <TextField value={tenLoaivatchat} onChange={e => setTenvatchat(e.target.value)} label="Tên vật chất" variant="standard" />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item sm={16}>
                            <Box>
                                <Button variant="contained" onClick={handleAdd}>Thêm</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div >
    )
}

export default MaterialTypeAdd;
