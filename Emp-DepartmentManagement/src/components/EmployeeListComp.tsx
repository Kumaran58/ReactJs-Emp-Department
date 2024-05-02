import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


interface EmpStruc {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    department_id: number,
    departmentName: String
    
}

const EmplList:React.FC=()=>{

    const [emplist, setemplist] = useState<EmpStruc[]>([]);

    async function getRest() {
        const response = await axios.get("http://localhost:8080/api/employees");
        setemplist(response.data);
    }

    useEffect(() => {
        getRest();

    }, [])




    return(

        <>
        <h1>Employee List  Componenet</h1>
        <Container>
                
                <br /><br />
                <table>
                    <thead>
                        <th>Full Name</th>
                        <th>email</th>
                        <th>department_id</th>
                        <th>Update</th>
                        <th>Delete</th>
                        

                    </thead>
                    <tbody>
                        {
                            emplist.map(temp => (
                                <tr key={temp.id}>
                                    <td>{temp.firstName} {temp.lastName}</td>

                                    <td>{temp.email}</td>
                                    <td>{temp.department_id}</td>
                                    
                                    <td><Link className="btn btn-info" to={`/EmployeeUpd/` + temp.id}> update</Link> </td>
                                    <td><Link className="btn btn-danger" to={`/EmployeeDel/` + temp.id}> Delete </Link> </td>

                                </tr>


                            ))
                        }
                    </tbody>
                </table>



            </Container>



        </>
    );
}

export default EmplList;
