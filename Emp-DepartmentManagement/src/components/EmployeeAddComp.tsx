import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


interface depStruc {
    id: number,
    departmentName: string,
    departmentDescription: string
}


const EmplAdd: React.FC = () => {

    const [depart, setdepart] = useState<depStruc[]>([]);

    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [depID, setdepID] = useState(0);

    const nav = useNavigate();


    async function getRest() {
        const response = await axios.get("http://localhost:8080/api/departments");
        setdepart(response.data);
    }

    useEffect(() => {
        getRest();

    }, [])


    // e: the event trigger the function
    const senddata = async (e: React.FormEvent) => {
        e.preventDefault();  // blocking default function

        if (depID === 0) {
            alert("select any department");
            return false;
        }

        const newEmp = {
            "id": 0, // auto increment in database
            "firstName": firstName,
            "lastName": LastName,
            "email": Email,
            "department_id": depID,
            "departmentName": "-"
        }

        await axios.post("http://localhost:8080/api/employees", newEmp);

        alert("added");
        nav("/EmployeeList");

    }


    return (

        <>
            <h1>Employee add  Componenet</h1>

            <Container>
                <br />

                <div>

                    <Form onSubmit={senddata}>
                        <Form.Group className="mb-3" id="1" >
                            <Form.Label>Enter First Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter  Name" onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="2">
                            <Form.Label>Enter Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Desc" onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="2">
                            <Form.Label>Enter email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Desc" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="2">
                            <Form.Label>Enter department</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setdepID(parseInt(e.target.value))} >
                                <option>Open this select menu</option>

                                {
                                    depart.map(temp => (
                                        <option value={temp.id}>{temp.departmentName}</option>

                                    ))
                                }

                            </Form.Select>


                        </Form.Group>

                        <br />

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>


                </div>



            </Container>

        </>
    );
}

export default EmplAdd;
