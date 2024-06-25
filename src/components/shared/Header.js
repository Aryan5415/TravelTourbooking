import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IndexImages from '../../assets/images/images';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
  <Navbar expand="lg" className="cstm-header">
      <Container>
        <Navbar.Brand href="/"><img src={IndexImages.logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home  </Link>
            <Link to="/about">About</Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Honeymoon Packages</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Tours Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Musical Events
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Build Package
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/packages">
            Upcoming Packages 
            </Nav.Link>
          </Nav>
            <Button variant="outline-success">Get in Touch</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header