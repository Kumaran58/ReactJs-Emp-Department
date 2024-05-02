import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

type RouteParams = {
    id: string
}

interface EmpStruc {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    department_id: number,
    departmentName: String
}


const EmplDel: React.FC = () => {

    const { id } = useParams<RouteParams>();

    const [emp, setemp] = useState<EmpStruc>();
    const nav=useNavigate();

    async function getemp() {
        const response = await axios.get<EmpStruc>(`http://localhost:8080/api/employees/${id}`);
        setemp(response.data);
    }
    
    useEffect(() => {
        getemp();

    }, []);


    async function deleteEmp() {
        try {
            const resp = await axios.delete(`http://localhost:8080/api/employees/${id}`);
            if (resp.status == 200) {
                alert("deleted");
                nav("/EmployeeList")
            }
            else {
                alert("error occured")
            }
        } catch (error) {
            console.error("Error deleting department:", error);
        }
    }



    return (

        <>
            <h1>Employee Delete  Componenet</h1>

            <Container>

                Name:{emp?.firstName} {emp?.lastName}
                <br />
                Email:{emp?.email}
                <br />
                department id:{emp?.department_id}
                <br />
                <br />

                <button className="btn btn-danger" onClick={deleteEmp}>Confirm delete</button>

            </Container>

        </>
    );
}

export default EmplDel;
