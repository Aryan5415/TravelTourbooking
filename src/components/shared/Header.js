import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IndexImages from "../../assets/images/images";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="cstm-header">
        <Container>
          <Link to="/">
            <img src={IndexImages.logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home </Link>
              <Link to="/about">About</Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">
                  Honeymoon Packages
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  <Link to="/packagesDetails">Tours Packages</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Musical Events
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={handleShow}>
                  Build Package
                </NavDropdown.Item>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h2>Build Your Own Package</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Enter destination (country, region or city)"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter destination (country, region or city)"
                        />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Enter destination (country, region or city)"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter destination (country, region or city)"
                        />
                      </FloatingLabel>

                      <Link to="/" className="add">
                        + Add destination
                      </Link>

                      <Row className="two-floating">
                        <Col xs={8} lg={8} md={8} className="form-floating one">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Date Range"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Date Range"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col xs={4} lg={4} md={4} className="form-floating two">
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Guests"
                          >
                            <Form.Control type="text" placeholder="Guests" />
                          </FloatingLabel>
                        </Col>
                      </Row>

                      <p className="activity">
                        Activities preferences (optional)
                      </p>

                      <Row className="cstm-checkboxes">
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Culture" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Outdoors" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Relaxing" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Wildlife" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Romantic" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Religious" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Hiking" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Musical" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Shopping" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Business" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Museams" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Party" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Traditions" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Walks" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="FIshing" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Cruise" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Guide" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Healthcare" />
                        </Col>
                        <Col xs={6} lg={3} md={4} className="p-0">
                          <Form.Check label="Accomodation" />
                        </Col>
                      </Row>

                      <Button type="submit">Build Package</Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </NavDropdown>
              <Link to="/packages">Upcoming Packages</Link>
            </Nav>
            <Button variant="outline-success">Get in Touch</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
