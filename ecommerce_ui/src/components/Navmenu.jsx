import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navmenu = () => (
    <Row>
        <Navbar expand="lg" bg="light">
            <Container>
                {/* <Navbar.Brand href="/cms"></Navbar.Brand> */}

                <Link to="/" className="navbar-brand">
                    {import.meta.env.VITE_APP_NAME}
                </Link>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav classNam="me-auto">
                        <Nav.Item>
                            <Link to="#" className="nav-link">
                                <i className="fa-solid fa-users me-2" /> Staffs
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="#" className="nav-link">
                                <i class="fa-solid fa-bring-front"></i> Order
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Row>
);
