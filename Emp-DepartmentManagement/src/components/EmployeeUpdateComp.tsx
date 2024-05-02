import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

type RouteParams = {
    id: string
}

interface depStruc {
    id: number,
    departmentName: string,
    departmentDescription: string
}


interface EmpStruc {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    department_id: number,
    departmentName: String

}

const EmplUpdate: React.FC = () => {

    const { id } = useParams<RouteParams>();

    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [depID, setdepID] = useState(0);

    
    const [myemp, setmyemp] = useState<EmpStruc>();
    const [mydep, setmydep] = useState<depStruc[]>([]);

    const nav=useNavigate();


    async function getdeps() {
        const response = await axios.get<depStruc[]>("http://localhost:8080/api/departments");
        setmydep(response.data);
    }

    async function getemp() {
        const response1 = await axios.get<EmpStruc>("http://localhost:8080/api/employees/" + id);
        setmyemp(response1.data);
        setFirstName(response1.data['firstName']);
        setLastName(response1.data['lastName']);
        setEmail(response1.data['email']);
        setdepID(response1.data['department_id']);
    }


    useEffect(() => {
        getdeps();
        getemp();
    }, [])

    const updemp = async () => {
        const newEmp = {
            "id": 0, // auto increment in database
            "firstName": firstName,
            "lastName": LastName,
            "email": Email,
            "department_id": depID,
            "departmentName": "-"
        }
        await axios.put("http://localhost:8080/api/employees/"+id, newEmp);
        nav("/EmployeeList");
    }




    return (

        <>
            <h1>Employee Update  Componenet</h1>

            <Container>
                <br />

                <div>

                    <Form onSubmit={updemp}>
                        <Form.Group className="mb-3" id="1" >
                            <Form.Label>Enter First Name </Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="2">
                            <Form.Label>Enter Last Name</Form.Label>
                            <Form.Control type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="2">
                            <Form.Label>Enter email</Form.Label>
                            <Form.Control type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="2">
                            <Form.Label>Enter department</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setdepID(parseInt(e.target.value))} >
                                <option>Open this select menu</option>

                                {
                                    mydep.map(temp => {
                                        if (temp.id==myemp?.department_id) {
                                            
                                            return <option selected value={temp.id}>{temp.departmentName}</option>


                                        }
                                        else {
                                            return <option value={temp.id}>{temp.departmentName}</option>


                                        }

                                    })
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

export default EmplUpdate;
