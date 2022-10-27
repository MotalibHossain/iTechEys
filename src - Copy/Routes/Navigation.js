import React, { useState, useEffect } from "react";
import "../style/navigation.css";
// react icon
import { BiDotsVertical } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

// import images
import logo from "../asset/itecheys-logo.png";

// Bootstraps elements
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

// Components import
import NavItem from "./NavItem";

const MainNav = () => {
    // In small devise navigation are collaps.If need to open and close then need to change in two lines
    const [leftClose, setLeftclose] = useState(false);
    const [rightClose, setRightclose] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="mb-3 p-0">
                <Container fluid>
                    {/* In small device left navigation */}
                    <Navbar.Toggle className="me-sm-3" onClick={() => setLeftclose(!leftClose)} />
                    <Navbar.Brand href="/" className="text-light bold Nav-logo">
                        {/* itech */}
                        <img src={logo} alt="logo" width="120px" />
                    </Navbar.Brand>
                    {/* In small device 3 dot right navigation */}
                    <Navbar.Toggle aria-controls="" className="float-end mt-1" onClick={() => setRightclose(!rightClose)}>
                        <a className="NavLink text-light" href="#">
                            <CgProfile size="28" />
                        </a>
                    </Navbar.Toggle>
                    <Navbar.Toggle aria-controls="" className="float-end ThreeDot" onClick={() => setRightclose(!rightClose)}>
                        <BiDotsVertical />
                    </Navbar.Toggle>
                    {/* ----------------------------------------------------
                                        Left navigation
                    ------------------------------------------------------*/}
                    <Navbar.Offcanvas show={leftClose} placement="start" onHide={() => setLeftclose(!leftClose)}>
                        <Offcanvas.Header closeButton onClick={() => setLeftclose(!leftClose)}>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                iTechEys
                                {/* <img src={logo} alt="logo" width="120px" /> */}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <NavItem />
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* ----------------------------------------------------
                                        Right navigation  
                    ------------------------------------------------------*/}
                    <Navbar.Offcanvas
                        show={rightClose}
                        id="offcanvasNavbar-expand-sm"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton onClick={() => setRightclose(!rightClose)}>
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
