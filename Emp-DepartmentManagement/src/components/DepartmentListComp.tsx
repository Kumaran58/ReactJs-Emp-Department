import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

interface depStruc {
    id: number,
    departmentName: string,
    departmentDescription: string
}

const DepartList: React.FC = () => {
    const [list, setlist] = useState<depStruc[]>([]);

    // const columns: any = React.useMemo(() => [
    //     { Header: "ID", accessor: "id" },
    //     { Header: "Dep Name", accessor: "departmentName" },
    //     { Header: "Dep Description", accessor: "departmentDescription" },

    // ], []);

    // const { headerGroups, rows, prepareRow } = useTable({ columns, data:list });


    async function getRest() {
        const response = await axios.get("http://localhost:8080/api/departments");
        setlist(response.data);
    }

    useEffect(() => {
        getRest();

    }, [])



    return (

        <>

            <Container>
                <h1>Department List</h1>
                <br /><br />
                <table>
                    <thead>
                        <th>departmentName</th>
                        <th>departmentDescription</th>
                        <th>update</th>
                        <th>Delete</th>

                    </thead>
                    <tbody>
                        {
                            list.map(temp => (
                                <tr key={temp.id}>
                                    <td>{temp.departmentName}</td>
                                    <td>{temp.departmentDescription}</td>
                                    <td><Link className="btn btn-info" to={`/DepartUpd/` + temp.id}> update</Link> </td>
                                    <td><Link className="btn btn-danger" to={`/DepartDel/` + temp.id}> Delete </Link> </td>

                                </tr>


                            ))
                        }
                    </tbody>
                </table>



            </Container>








            {/* <table>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr>
                                {
                                    headerGroup.headers.map(Header => (
                                        <th>{Header.render("Header")}</th>
                                    ))
                                }

                            </tr>
                        ))
                    }


                </thead>
                <tbody>
                    {
                        rows.map((row) => {
                            prepareRow(row); // Call prepareRow for each row
                            return (
                                <tr >
                                    {
                                        row.cells.map((cell) => (
                                            <td>{cell.render("Cell")}</td>
                                        ))
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>


            </table> */}



        </>
    );
}

export default DepartList;
