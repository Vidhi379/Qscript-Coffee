import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar className='p-4' variant="dark" expand="lg">
      <Navbar.Brand href="#home">QScript Coffee</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='fs-18' href="#home">Home</Nav.Link>
          <Nav.Link className='fs-18' href="#about">About</Nav.Link>
          <Nav.Link className='fs-18' href="#menu">Menu</Nav.Link>
          <Nav.Link className='fs-18' href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;