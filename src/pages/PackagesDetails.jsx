import React, { useEffect, useState } from "react";
import IndexImages from "../assets/images/images";
import { Button, Col, Container, Row } from "react-bootstrap";
import MainBanner from "../components/shared/MainBanner";
import { FaStar } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import Pagination from "react-bootstrap/Pagination";

function PackagesDetails() {
  const [pageData, setPageData] = useState({
    title: "",
    image: "",
    subTitle: "",
    pageType: "",
  });

  const [activeTab, setActiveTab] = useState("information");

  useEffect(() => {
    setPageData({
      title: "Landscapes",
      image: IndexImages.DetailBanner,
      subTitle: "Explore",
      pageType: "packagesdetails",
    });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "information":
        return (
          <Row>
            <Col xs={12} lg={7} md={12}>
              <div className="title">
                <h2>Switzerland</h2>
                <h3>
                  1,000 $<span className="color-chnge">/</span>
                  <span className="font-chnge">Per Couple</span>
                </h3>
              </div>
              <div className="reviews">
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p>(2.3k review)</p>
              </div>
              <p className="desc">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
                aut provident aliquam. Aut aspernatur consequuntur eum quaerat
                distinctio ut inventore aliquid et quasi alias ut rerum suscipit
                et nihil deleniti. Ex optio sequi et quos praesentium in nostrum
                labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste
                expedita est dolor similique ut quasi maxime ut deserunt autem
                At praesentium voluptatem aut libero nisi. Et eligendi sint ab
                cumque veritatis aut provident aliquam. Aut aspernatur
                consequuntur eum quaerat distinctio ut inventore aliquid et
                quasi alias ut rerum suscipit et nihil deleniti.
              </p>
              <Row className="info">
                <Col xs={12} lg={4} md={4}>
                  <h3>Destination</h3>
                </Col>
                <Col xs={12} lg={8} md={8}>
                  <p>: Zurich, Switzerland</p>
                </Col>
                <Col xs={12} lg={4} md={4}>
                  <h3>Departure</h3>
                </Col>
                <Col xs={12} lg={8} md={8}>
                  <p>: Main Sqaure, New City</p>
                </Col>
                <Col xs={12} lg={4} md={4}>
                  <h3>Departure Time</h3>
                </Col>
                <Col xs={12} lg={8} md={8}>
                  <p>: Approximately 08 : 10 AM</p>
                </Col>
                <Col xs={12} lg={4} md={4}>
                  <h3>Return Time</h3>
                </Col>
                <Col xs={12} lg={8} md={8}>
                  <p>: Approximately 07 : 20 PM</p>
                </Col>
                <Col xs={12} lg={4} md={4}>
                  <h3>Dress Code</h3>
                </Col>
                <Col xs={12} lg={8} md={8}>
                  <p>: Casual, comfortable and light</p>
                </Col>
                <Col xs={12} lg={4} md={4}>
                  <h3>Not Included</h3>
                </Col>
                <Col xs={12} lg={8} md={8}>
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <p>
                        <FaRegCircleXmark />
                        Gallery Ticket
                      </p>
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <p>
                        <FaRegCircleXmark />
                        Lunch
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={4} md={4}>
                  <h3>Included</h3>
                </Col>
                <Col xs={12} lg={8} md={8}>
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <p>
                        <FaRegCircleCheck />5 star Accomodations
                      </p>
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <p>
                        <FaRegCircleCheck />
                        Airport Transfer
                      </p>
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <p>
                        <FaRegCircleCheck />
                        Breakfast
                      </p>
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <p>
                        <FaRegCircleCheck />
                        Personal Guide
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="cstm-gallery">
                <h2>From our gallery</h2>
                <p>
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolor similique ut quasi maxime ut deserunt autem At
                  praesentium voluptatem aut libero nisi.
                </p>
                <Col xs={6} md={4} lg={4}>
                  <img src={IndexImages.GalleryImg1} alt="GalleryImg1" />
                </Col>
                <Col xs={6} md={4} lg={4}>
                  <img src={IndexImages.GalleryImg2} alt="GalleryImg2" />
                </Col>
                <Col xs={6} md={4} lg={4}>
                  <img src={IndexImages.GalleryImg3} alt="GalleryImg3" />
                </Col>
                <Col xs={6} md={4} lg={4}>
                  <img src={IndexImages.GalleryImg4} alt="GalleryImg4" />
                </Col>
                <Col xs={6} md={4} lg={4}>
                  <img src={IndexImages.GalleryImg5} alt="GalleryImg5" />
                </Col>
                <Col xs={6} md={4} lg={4}>
                  <img src={IndexImages.GalleryImg6} alt="GalleryImg6" />
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={5} md={12} className="right">
              <div className="book-tour">
                <h2>Book This Tour</h2>
                <p>
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolo.
                </p>
                <Form>
                  <div className="text">
                    <Form.Control
                      type="text"
                      className="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="email">
                    <Form.Control
                      type="email"
                      className="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="email">
                    <Form.Control type="email" placeholder="Confirm Email" />
                  </div>
                  <div className="phone">
                    <Form.Control type="tel" placeholder="Phone" />
                  </div>
                  <div className="date">
                    <Form.Control type="date" placeholder="dd-mm-yy" />
                  </div>
                  <div className="ticket">
                    <Form.Control
                      type="number"
                      placeholder="Number of ticket"
                    />
                  </div>
                  <div className="message">
                    <Form.Control as="textarea" placeholder="Message" />
                  </div>
                  <Button className="check">Check Availability</Button>
                  <Button type="submit" className="submit">
                    Book Now
                  </Button>
                </Form>
              </div>
              <img src={IndexImages.PackageAirplane} alt="PackageAirplane" />
            </Col>
          </Row>
        );
      case "tourPlan":
        return (
          <Row>
            <Col xs={12} lg={7} md={12} className="left">
              <h2 className="title">Tour Plan</h2>
              <Row className="tour-info">
                <Col xs={2} lg={1} md={1}>
                  <p className="number">01</p>
                </Col>
                <Col xs={10} lg={11} md={11} className="info-content">
                  <h3>Day 1: Departure</h3>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem
                  </p>
                  <ul>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </ul>
                </Col>
                <Col xs={2} lg={1} md={1}>
                  <p className="number">02</p>
                </Col>
                <Col xs={10} lg={11} md={11} className="info-content">
                  <h3>Day 2: Visiting Zurich, Geneva and Zermatt</h3>
                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet.
                  </p>
                  <ul>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </ul>
                </Col>
                <Col xs={2} lg={1} md={1}>
                  <p className="number">03</p>
                </Col>
                <Col xs={10} lg={11} md={11} className="info-content">
                  <h3>Day 3: Rest</h3>
                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet.
                  </p>
                  <ul>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </ul>
                </Col>
                <Col xs={2} lg={1} md={1}>
                  <p className="number">04</p>
                </Col>
                <Col xs={10} lg={11} md={11} className="info-content">
                  <h3>Day 4: Historical Tour</h3>
                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet.
                  </p>
                  <ul>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </ul>
                </Col>
                <Col xs={2} lg={1} md={1}>
                  <p className="number">05</p>
                </Col>
                <Col xs={10} lg={11} md={11} className="info-content">
                  <h3>Day 5: Return</h3>
                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede mollis pretium.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={5} md={12} className="right">
              <div className="book-tour">
                <h2>Book This Tour</h2>
                <p>
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolo.
                </p>
                <Form>
                  <div className="text">
                    <Form.Control
                      type="text"
                      className="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="email">
                    <Form.Control
                      type="email"
                      className="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="email">
                    <Form.Control type="email" placeholder="Confirm Email" />
                  </div>
                  <div className="phone">
                    <Form.Control type="tel" placeholder="Phone" />
                  </div>
                  <div className="date">
                    <Form.Control type="date" placeholder="dd-mm-yy" />
                  </div>
                  <div className="ticket">
                    <Form.Control
                      type="number"
                      placeholder="Number of ticket"
                    />
                  </div>
                  <div className="message">
                    <Form.Control as="textarea" placeholder="Message" />
                  </div>
                  <Button className="check">Check Availability</Button>
                  <Button type="submit" className="submit">
                    Book Now
                  </Button>
                </Form>
              </div>
              <img src={IndexImages.PackageAirplane} alt="PackageAirplane" />
            </Col>
          </Row>
        );
      case "location":
        return (
          <Row className="tab-before">
            <Col xs={12} md={12} lg={7} className="left location">
              <h2 className="title">Tour location</h2>
              <p>
                Qui tempore voluptate qui quia commodi rem praesentium alias et
                voluptates officia sed molestiae sint et voluptas quos. Qui
                harum repudiandae galisum dolorem Hic deleniti officiis est
                sapiente explicabo non eaque corporis aut voluptatum iusto At
                facere enim id voluptas reprehenderit. Ut voluptas laudantium
              </p>
              <img src={IndexImages.Map} alt="Map" />
              <p>
                Sit quasi soluta non temporibus voluptas non necessitatibus
                tempore sit deleniti praesentium aut velit nostrum ut itaque
                atque ad expedita veniam. Hic deleniti officiis est sapiente
                explicabo non eaque corporis aut voluptatum iusto At facere enim
                id voluptas reprehenderit. Ut voluptas laudantium et molestias
                voluptatem ex doloremque omnis est ipsum nihil.
              </p>
              <p>
                Quo facere eveniet 33 sint rerum est internos impedit sed
                dignissimos quia. Et rerum deleniti et voluptates saepe qui
                labore quisquam non accusantium temporibus. Quo velit numquam
                hic excepturi sequi sed dicta doloribus! In quos possimus quo
                quibusdam aliquid est culpa porro sed molestiae libero At
                blanditiis minima a reiciendis fugiat.
              </p>
            </Col>
            <Col xs={12} lg={5} md={12} className="right">
              <div className="book-tour">
                <h2>Book This Tour</h2>
                <p>
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolo.
                </p>
                <Form>
                  <div className="text">
                    <Form.Control
                      type="text"
                      className="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="email">
                    <Form.Control
                      type="email"
                      className="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="email">
                    <Form.Control type="email" placeholder="Confirm Email" />
                  </div>
                  <div className="phone">
                    <Form.Control type="tel" placeholder="Phone" />
                  </div>
                  <div className="date">
                    <Form.Control type="date" placeholder="dd-mm-yy" />
                  </div>
                  <div className="ticket">
                    <Form.Control
                      type="number"
                      placeholder="Number of ticket"
                    />
                  </div>
                  <div className="message">
                    <Form.Control as="textarea" placeholder="Message" />
                  </div>
                  <Button className="check">Check Availability</Button>
                  <Button type="submit" className="submit">
                    Book Now
                  </Button>
                </Form>
              </div>
              <img src={IndexImages.PackageAirplane} alt="PackageAirplane" />
            </Col>
          </Row>
        );
      case "gallery":
        return (
          <Row className="tab-before">
            <Col xs={12} lg={7} md={12} className="left gallery">
              <Row className="main">
                <Col xs={12} md={6} lg={6} className="left-img">
                  <img src={IndexImages.TabGalleryImg1} alt="TabGalleryImg1" />
                  <img src={IndexImages.TabGalleryImg2} alt="TabGalleryImg2" />
                  <img src={IndexImages.TabGalleryImg3} alt="TabGalleryImg3" />
                </Col>
                <Col xs={12} md={6} lg={6} className="right-img">
                  <img src={IndexImages.TabGalleryImg4} alt="TabGalleryImg4" />
                </Col>
                <Col xs={8} md={8} lg={8}>
                  <img src={IndexImages.TabGalleryImg5} alt="TabGalleryImg5" />
                </Col>
                <Col xs={4} md={4} lg={4}>
                  <img src={IndexImages.TabGalleryImg6} alt="TabGalleryImg6" />
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <img src={IndexImages.TabGalleryImg7} alt="TabGalleryImg7" />
                </Col>
              </Row>
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </Col>
            <Col xs={12} lg={5} md={12} className="right">
              <div className="book-tour">
                <h2>Book This Tour</h2>
                <p>
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolo.
                </p>
                <Form>
                  <div className="text">
                    <Form.Control
                      type="text"
                      className="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="email">
                    <Form.Control
                      type="email"
                      className="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="email">
                    <Form.Control type="email" placeholder="Confirm Email" />
                  </div>
                  <div className="phone">
                    <Form.Control type="tel" placeholder="Phone" />
                  </div>
                  <div className="date">
                    <Form.Control type="date" placeholder="dd-mm-yy" />
                  </div>
                  <div className="ticket">
                    <Form.Control
                      type="number"
                      placeholder="Number of ticket"
                    />
                  </div>
                  <div className="message">
                    <Form.Control as="textarea" placeholder="Message" />
                  </div>
                  <Button className="check">Check Availability</Button>
                  <Button type="submit" className="submit">
                    Book Now
                  </Button>
                </Form>
              </div>
              <img src={IndexImages.PackageAirplane} alt="PackageAirplane" />
            </Col>
          </Row>
        );
      // default:
      //   return (
      //     <div>
      //       <h2>Information</h2>
      //       <p>This is the Information tab content.</p>
      //     </div>
      //   );
    }
  };

  return (
    <>
      <MainBanner pageData={pageData} />
      <section className="cstm-packagedetail">
        <Container>
          <Nav
            variant="tabs"
            defaultActiveKey="information"
            className="upper"
            onSelect={(selectedKey) => setActiveTab(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link eventKey="information">
                <img src={IndexImages.InfoCircle} alt="InfoCircle" /> Information
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tourPlan">
                <img src={IndexImages.BeforeCalender} alt="BeforeCalender" />
                Tour Plan
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="location">
                <img src={IndexImages.BeforeLocation} alt="BeforeLocation" /> Location
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="gallery">
                <img src={IndexImages.BeforeGallery} alt="BeforeGallery" /> Gallery
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="tab-content">{renderContent()}</div>
        </Container>
      </section>
    </>
  );
}

export default PackagesDetails;
