/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, Grid, Input, MenuItem, Select, TextField } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const MaterialAdd = () => {

    const [loaivatchat, setLoaivatchat] = useState("");
    const [tenvatchat, setTenvatchat] = useState("abc");
    const [image, setImage] = useState("")
    
    const handleChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0]
        console.log(file);
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function () {
            setImage(reader.result)
        };
    }

    return (
        <div className="mt-4">
            <div className="d-flex align-items-center">
                <div>
                    <h3>Vật chất</h3>
                </div>
            </div>
            <div className="border-bottom border-primary border-5" />
            <Grid container spacing={4} columns={16} className="py-4">
                <Grid item md={8} sm={16}>
                    <Card className="card-file">
                        <label className="input-file">
                            <CameraAltIcon color="primary" sx={{ fontSize: 120 }} />
                            <Input onChange={e => handleChange(e)} accept="image/*" className="d-none" id="icon-button-file" type="file" />
                            <img src={image} />
                        </label>
                    </Card>
                </Grid>
                <Grid item md={8} sm={16}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item sm={16}>
                            <Box>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">Loại vật chất</InputLabel>
                                    <Select
                                        value={loaivatchat}
                                        label="Loại vật chất"
                                        onChange={e => setLoaivatchat(e.target.value)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item sm={16}>
                            <Box>
                                <FormControl fullWidth>
                                    <TextField value={tenvatchat} onChange={e => setTenvatchat(e.target.value)} label="Tên vật chất" variant="standard" />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item sm={16}>
                            <Box>
                                <Button variant="contained">Thêm</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div >
    )
}

export default MaterialAdd;
