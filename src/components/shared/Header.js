import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IndexImages from "../../assets/images/images";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="cstm-header">
        <Container>
          <Link to="/">
            <img src={IndexImages.logo} />
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
                <NavDropdown.Item href="#action3">
                  Honeymoon Packages
                </NavDropdown.Item>
                <Link to="/packagesDetails">Tours Packages</Link>
                <NavDropdown.Item href="#action5">
                  Musical Events
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6" onClick={handleShow}>
                  Build Package
                </NavDropdown.Item>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h2>Build Your Own Package</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter destination (country, region or city)"
                      />
                      <label htmlFor="floatingInput">
                        Enter destination (country, region or city)
                      </label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter destination (country, region or city)"
                      />
                      <label htmlFor="floatingInput">
                        Enter destination (country, region or city)
                      </label>
                    </div>
                    <Link to="/" className="add">+ Add destination</Link>
                    <Row className="two-floating">
                    <Col xs={8} className="form-floating one">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Date Range"
                      />
                      <label htmlFor="floatingInput">
                        Date Range
                      </label>
                    </Col>
                    <Col xs={4} className="form-floating two">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Guests"
                      />
                      <label htmlFor="floatingInput">
                      Guests
                      </label>
                    </Col>
                    </Row>
                    <Link to="/" className="add">Activities preferences (optional)</Link>
                    <Row className="cstm-checkboxes">
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Culture</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Outdoors</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Relaxing</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Wildlife</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Romantic</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Religious</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Hiking</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Musical</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Shopping</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Business</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Museams</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Party</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Traditions</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Walks</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">FIshing</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Cruise</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Guide</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Healthcare</label>
    </div>
                    </Col>
                    <Col xs={6} lg={3} md={4} className="p-0">
                    <div class="form-check">
    <input class="form-check-input" type="checkbox" />
    <label class="form-check-label">Accomodation</label>
    </div>
                    </Col>

                    </Row>
                    <Button>Build Package</Button>
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
