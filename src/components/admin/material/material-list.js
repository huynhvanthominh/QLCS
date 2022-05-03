import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { materialService } from "../../../services/material.service";
import Table from "../../themes/table/table";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import { pink } from "@mui/material/colors";
import { Button } from "@mui/material";
import { useRouteMatch } from "react-router-dom";
import { LinkCustom } from "../../../customs/Link.Custom";

const MaterialList = () => {

    const { path } = useRouteMatch();
    const [materials, setMaterials] = useState([]);


    const handleClick = async () => {

    }

    useEffect(() => {
        const getData = async () => {
            const { data } = await materialService.get();
            setMaterials(data);
        }
        getData();
    }, []);

    return (
        <div className="mt-4">
            <div className="d-flex align-items-center">
                <div>
                    <h3>Vật chất</h3>
                </div>
                <Button className="ms-auto" variant="contained">
                    <LinkCustom color="white" to={path + "Add"}>
                        <AddIcon />
                        Thêm
                    </LinkCustom>
                </Button>
            </div>
            <div className="border-bottom border-primary border-5" />
            <div className="py-4">
                <Table dataSource={materials} hover striped border>
                    {{
                        columns: [
                            {
                                title: "#ID",
                                data: "idVatchat",
                                className: "justify-content-center",
                                sort: true,
                            },
                            {
                                title: "Tên vật chất",
                                data: "tenVatchat",
                                sort: true,
                            },
                            {
                                title: "Tên loại vật chất",
                                data: "tenLoaivatchat",
                                sort: true,
                            },
                            {
                                title: "",
                                data: "idVatchat",
                                render: function (data) {
                                    return (
                                        <div className="d-flex justify-content-center">
                                            <Button onClick={() => handleClick(data)} variant="text"><EditIcon color="primary" /></Button>
                                            <Button onClick={() => handleClick(data)} variant="text"><DeleteForeverIcon sx={{ color: pink[500] }} /></Button>
                                        </div>
                                    );
                                },
                            },
                        ],
                    }}
                </Table>
            </div>
        </div>
    )

}

export default MaterialList;