import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/HomeComponents';
import DepartAdd from './components/DepartmentAddComp';
import DepartList from './components/DepartmentListComp';
import EmplAdd from './components/EmployeeAddComp';
import EmplList from './components/EmployeeListComp';
import DepartUpdate from './components/DepartmentUpdateComp';
import DepartDel from './components/DepartmentDeleteComp';
import EmplUpdate from './components/EmployeeUpdateComp';
import EmplDel from './components/EmployeeDeleteComp';

function App() {
  return (

    <>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Emp Managemet System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/DepartAdd">DepartAdd</Nav.Link>
              <Nav.Link href="/DepartList">DepartList</Nav.Link>
              <Nav.Link href="/EmployeeAdd">EmployeeAdd</Nav.Link>
              <Nav.Link href="/EmployeeList">EmployeeList</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <BrowserRouter basename='/'>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>

          <Route path='/DepartAdd' element={<DepartAdd></DepartAdd>}></Route>

          <Route path='/DepartList' element={<DepartList></DepartList>}></Route>
          
          <Route path='/DepartUpd/:id' element={<DepartUpdate></DepartUpdate>}></Route>
          
          <Route path='/DepartDel/:id' element={<DepartDel></DepartDel>}></Route>
          
          
          <Route path='/EmployeeAdd' element={<EmplAdd></EmplAdd>}></Route>

          <Route path='/EmployeeList' element={<EmplList></EmplList>}></Route>

          <Route path='/EmployeeUpd/:id' element={<EmplUpdate></EmplUpdate>}></Route>
          
          <Route path='/EmployeeDel/:id' element={<EmplDel></EmplDel>}></Route>
          



        </Routes>
      </BrowserRouter>
      <Outlet></Outlet>

    </>
  );
}

export default App;
