import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DepartAdd: React.FC = () => {

    const [Des, setDes] = useState("");
    const [Name, setName] = useState("");

    const nav=useNavigate();

    const addDept = async () => {
        const newDept = {
            "id": 0,
            "departmentName": Name,
            "departmentDescription": Des
        }

        await axios.post("http://localhost:8080/api/departments", newDept);
        
        alert("added");
        nav("/DepartList");
    }


    return (


        <>

            <Container>
                <h1>dep add  Component</h1>
                <br />

                <div>

                    <Form onSubmit={addDept}>
                        <Form.Group className="mb-3" id="1" >
                            <Form.Label>Enter Dept Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter  Name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="2">
                            <Form.Label>Enter Dept Desc</Form.Label>
                            <Form.Control type="text" placeholder="Enter Desc" onChange={(e) => setDes(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>


                </div>



            </Container>



        </>
    );
}

export default DepartAdd;
