import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    const location = useLocation();

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Beer Reporting Tool</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/home" active={location.pathname === "/home" || location.pathname === "/"}>Home</Nav.Link> 
                        <Nav.Link id="searchMenu" href="/search" active={location.pathname === "/search"}>Search</Nav.Link>
                        <Nav.Link href="/about" active={location.pathname === "/about"}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navigation;