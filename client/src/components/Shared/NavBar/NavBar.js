import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <Navbar className="nav" sticky="top" expand="lg">
        <Container>
            <Navbar.Brand id="nav-brand" as={Link} to="/">
                Eventia
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto items-nav">
                    <Nav.Link active as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link active as={Link} to="/dashboard">
                        Dashboard
                    </Nav.Link>
                    <Nav.Link active as={Link} to="/contact">
                        Contact
                    </Nav.Link>
                    <Nav.Link active as={Link} to="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavBar;
