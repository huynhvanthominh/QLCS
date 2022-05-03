import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { LinkCustom } from "../../../customs/Link.Custom";
import Table from "../../themes/table/table";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { pink } from "@mui/material/colors";
import { Button } from "@mui/material";
import { materialTypeService } from "../../../services/material-type.service"

const MaterialTypeList = () => {

    const { path } = useRouteMatch();
    const [materialTypes, setMaterialTypes] = useState([]);

    const fetchMaterialType = async () => {
        const { data } = await materialTypeService.get();
        setMaterialTypes(data);
    }

    useEffect(() => {
        fetchMaterialType();
    }, []);

    const handleClick = async () => {

    }

    const handleDelete = async (id) => {
        const { data } = await materialTypeService.delete(id)
        if (data.affectedRows > 0) {
            fetchMaterialType();
        }
    }

    return (
        <div className="mt-4">
            <div className="d-flex align-items-center">
                <div>
                    <h3>Loại vật chất</h3>
                </div>
                <Button className="ms-auto" variant="contained">
                    <LinkCustom color="white" to={path + "/Add"}>
                        <AddIcon />
                        Thêm
                    </LinkCustom>
                </Button>
            </div>
            <div className="border-bottom border-primary border-5" />
            <div className="py-4">
                <Table dataSource={materialTypes} hover striped border>
                    {{
                        columns: [
                            {
                                title: "#ID",
                                data: "idLoaivatchat",
                                className: "justify-content-center",
                                sort: true,
                            },
                            {
                                title: "Tên loại vật chất",
                                data: "tenLoaivatchat",
                                sort: true,
                            },
                            {
                                title: "",
                                data: "idLoaivatchat",
                                render: function (data) {
                                    return (
                                        <div className="d-flex justify-content-center">
                                            <Button onClick={() => handleClick(data)} variant="text"><EditIcon color="primary" /></Button>
                                            <Button onClick={() => handleDelete(data)} variant="text"><DeleteForeverIcon sx={{ color: pink[500] }} /></Button>
                                        </div>
                                    );
                                },
                            },
                        ],
                    }}
                </Table>
            </div>
        </div >
    )
}

export default MaterialTypeList;