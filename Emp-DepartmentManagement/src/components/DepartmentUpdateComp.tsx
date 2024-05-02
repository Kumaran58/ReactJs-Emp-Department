import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DepartList from "./DepartmentListComp";


type RouteParams = {
    id: string
}

interface depStruc {
    id: number,
    departmentName: string,
    departmentDescription: string
}


const DepartUpdate: React.FC = () => {

    const { id } = useParams<RouteParams>();

    const [Des, setDes] = useState("");
    const [Name, setName] = useState("");

    const [myupd, setmyupd] = useState<depStruc>();


    async function getRest() {
        const response = await axios.get<depStruc>("http://localhost:8080/api/departments/" + id);
        setmyupd(response.data);
        setName(response.data['departmentName']);
        setDes(response.data['departmentDescription']);
    }

    useEffect(() => {
        getRest();

    }, [])

    const updDept = async () => {
        const newDept = {
            "departmentName": Name,
            "departmentDescription": Des
        }
        await axios.put(`http://localhost:8080/api/departments/${id}`, newDept);
        alert("updated");

    }




    return (

        <>
            <h1>dep  Update  Componenet</h1>
            <Container>
                <Row>
                    <Col md={12}>
                        <div>

                            <Form onSubmit={updDept}>
                                <Form.Group className="mb-3" id="1" >
                                    <Form.Label>Enter Dept Name </Form.Label>
                                    <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" id="2">
                                    <Form.Label>Enter Dept Desc</Form.Label>
                                    <Form.Control type="text" value={Des} onChange={(e) => setDes(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>


                        </div>

                    </Col>



                </Row>


            </Container>





        </>
    );
}

export default DepartUpdate;
