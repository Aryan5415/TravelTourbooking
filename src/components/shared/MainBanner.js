import React from "react";
import IndexImages from "../../assets/images/images";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function MainBanner(props) {
  const data = props?.pageData;
  return (
    <>
      {data?.pageType !== "home" ? (
        <section
          className="hero"
          style={{ backgroundImage: `URL(${data?.image})` }}
        >
          <Container>
            <h3>{data?.subTitle} </h3>
            <h1>{data?.title}</h1>
          </Container>
        </section>
      ) : (
        <section className="homehero">
          <Carousel>
            <Carousel.Item
              className="cstm-slides"
              style={{ backgroundImage: `URL(${data?.image})` }}
            >
              <Container>
                <div className="content">
                  <h1>No matter where you’re going to, we’ll take you there</h1>
                  <Row className="filter">
                    <Col lg={3} xs={6} md={3} className="comn">
                      <Link to="/">Where to?</Link>
                    </Col>
                    <Col lg={3} xs={6} md={3} className="comn">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Travel Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="/">Action</Dropdown.Item>
                          <Dropdown.Item href="/">Another action</Dropdown.Item>
                          <Dropdown.Item href="/">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col lg={6} xs={12} md={6} className="last">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Duration
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="/">Action</Dropdown.Item>
                          <Dropdown.Item href="/">Another action</Dropdown.Item>
                          <Dropdown.Item href="/">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <p>
                    <img src={IndexImages.Herouser} alt="Herouser" />2,500 people booked
                    Tommorowland Event in last 24 hours
                  </p>
                </div>
              </Container>
              <img
                src={IndexImages.scrollImg}
                className="scroll"
                alt="scollImg"
              />
            </Carousel.Item>
            <Carousel.Item
              className="cstm-slides"
              style={{ backgroundImage: `URL(${data?.image})` }}
            >
              <Container>
                <div className="content">
                  <h1>No matter where you’re going to, we’ll take you there</h1>
                  <Row className="filter">
                    <Col lg={3} xs={6} md={3} className="comn">
                      <Link to="/">Where to?</Link>
                    </Col>
                    <Col lg={3} xs={6} md={3} className="comn">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Travel Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="/">Action</Dropdown.Item>
                          <Dropdown.Item href="/">Another action</Dropdown.Item>
                          <Dropdown.Item href="/">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col lg={6} xs={12} md={6} className="last">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Duration
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="/">Action</Dropdown.Item>
                          <Dropdown.Item href="/">Another action</Dropdown.Item>
                          <Dropdown.Item href="/">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <p>
                    <img src={IndexImages.Herouser} alt="Herouser" />2,500 people booked
                    Tommorowland Event in last 24 hours
                  </p>
                </div>
              </Container>
              <img
                src={IndexImages.scrollImg}
                className="scroll"
                alt="scrollImg"
              />
            </Carousel.Item>
            <Carousel.Item
              className="cstm-slides"
              style={{ backgroundImage: `URL(${data?.image})` }}
            >
              <Container>
                <div className="content">
                  <h1>No matter where you’re going to, we’ll take you there</h1>
                  <Row className="filter">
                    <Col lg={3} xs={6} md={3} className="comn">
                      <Link to="/">Where to?</Link>
                    </Col>
                    <Col lg={3} xs={6} md={3} className="comn">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Travel Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="/">Action</Dropdown.Item>
                          <Dropdown.Item href="/">Another action</Dropdown.Item>
                          <Dropdown.Item href="/">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col lg={6} xs={12} md={6} className="last">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Duration
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="/">Action</Dropdown.Item>
                          <Dropdown.Item href="/">Another action</Dropdown.Item>
                          <Dropdown.Item href="/">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <p>
                    <img src={IndexImages.Herouser} alt="Herouser" />2,500 people booked
                    Tommorowland Event in last 24 hours
                  </p>
                </div>
              </Container>
              <img
                src={IndexImages.scrollImg}
                className="scroll"
                alt="scrollImg"
              />
            </Carousel.Item>
          </Carousel>
        </section>
      )}
    </>
  );
}

export default MainBanner;
