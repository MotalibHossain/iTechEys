import React, { useState, useEffect } from "react";
import '../../style/navigation.css'
// react icon
import { BiDotsVertical} from "react-icons/bi";

// Bootstraps elements
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

// Components import 
import NavItem from './NavItem'

const MainNav = () => {
    const [left, leftSet] = useState(false);
    const [right, rightSet] = useState(false);

    const ShowLeft = () => {
        leftSet(!left);
    };
    const ShowRight = () => {
        rightSet(!right);
    };

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-3 p-0">
                <Container fluid>
                    <Navbar.Toggle className="me-sm-3" aria-controls="offcanvasNavbar-expand-lg" onClick={ShowLeft} />
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="" className="float-end" onClick={ShowRight}>
                        <BiDotsVertical />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        show={left}
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton onClick={ShowLeft}>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <NavItem />
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    <Navbar.Offcanvas
                        show={right}
                        id="offcanvasNavbar-expand-sm"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton onClick={ShowRight}>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">MH-Blog</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Nav.Link href="#action1">About</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown-expand-2">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNav;
