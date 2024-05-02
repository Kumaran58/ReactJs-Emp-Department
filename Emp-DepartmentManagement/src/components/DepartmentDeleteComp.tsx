import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DepartList from "./DepartmentListComp";
import { Container } from "react-bootstrap";

type RouteParams = {
    id: string
}

interface depStruc {
    id: number,
    departmentName: string,
    departmentDescription: string
}


const DepartDel: React.FC = () => {

    const { id } = useParams<RouteParams>();

    const [mydel, setmeydel] = useState<depStruc>();

    const nav=useNavigate();


    async function getRest() {
        const response = await axios.get<depStruc>(`http://localhost:8080/api/departments/${id}`);
        setmeydel(response.data);
    }

    useEffect(() => {
        getRest();

    }, [])


    async function deletedep() {
        try {
            const resp=await axios.delete(`http://localhost:8080/api/departments/${id}`);
            if(resp.status==200){
                alert("deleted");
                nav("/DepartList");
            }
            else{
                alert("error occured")
            }
        } catch (error) {
            console.error("Error deleting department:", error);
        }
    }

    return (

        <>
        <br />


            <Container>

                Name:{mydel?.departmentName}
                <br />
                description:{mydel?.departmentDescription}
                <br />


                <button className="btn btn-danger" onClick={deletedep}>Confirm delete</button>



            </Container>


        </>
    );
}

export default DepartDel;
