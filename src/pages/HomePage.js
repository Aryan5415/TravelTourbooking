import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import IndexImages from "../assets/images/images";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CarouselComponent from '../components/shared/CarouselComponent';
import MainBanner from '../components/shared/MainBanner';
function HomePage() {
  const [pageData, setPageData] = useState({
    title: "",
    image: "",
    subTitle: "",
    pageType: "",
    image2: "",
    image3: "",
  });

  useEffect(() => {
    setPageData({
      title: "No matter where you’re going to, we’ll take you there",
      image: IndexImages.homeBanner,
      subTitle: "",
      pageType: "home",
      image2: IndexImages.aboutImg,
      image3: IndexImages.PackageBanner,
    });
  }, []);
  return (
    <>
    <MainBanner pageData={pageData} />
      <section className="patners">
        <Container>
          <Row>
            <Col>
              <img src={IndexImages.FlyEmirates} />
            </Col>
            <Col>
              <img src={IndexImages.Trivago} />
            </Col>
            <Col>
              <img src={IndexImages.AirBnb} />
            </Col>
            <Col>
              <img src={IndexImages.TurkishAirline} />
            </Col>
            <Col>
              <img src={IndexImages.Swiss} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cstm-category">
        <Container>
          <h3>CATEGORY</h3>
          <h2>We Offer Best Services</h2>
          <Row className="sub-category">
            <Col>
              <Link to="/">
                <img src={IndexImages.Serviceimg1} />
                <h3>Guided Tours</h3>
                <p>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <img src={IndexImages.Serviceimg2} />
                <h3>Best Flights Options</h3>
                <p>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <img src={IndexImages.Serviceimg3} />
                <h3>Religious Tours</h3>
                <p>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </Link>
            </Col>
            <Col>
              <Link to="/">
                <img src={IndexImages.Serviceimg4} />
                <h3>Medical insurance</h3>
                <p>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </Link>
            </Col>
          </Row>
          <Row className="cstm-services">
            <Col className="service-img">
              <img src={IndexImages.HoneymoonImg} />
            </Col>
            <Col className="content">
              <h3>Honeymoon Specials</h3>
              <h2>Our Romantic Tropical Destinations</h2>
              <p>
                Et labore harum non nobis ipsum eum molestias mollitia et
                corporis praesentium a laudantium internos. Non quis eius quo
                eligendi corrupti et fugiat nulla qui soluta recusandae in
                maxime quasi aut ducimus illum aut optio quibusdam!
              </p>
              <Link to="/">View Packages</Link>
            </Col>
          </Row>
          <Row className="cstm-services">
            <Col className="content2" xs={5}>
              <h3>Fast & Easy</h3>
              <h2>Get Your Favourite Resort Bookings</h2>
              <Row className="cstm-iconbox">
                <Col xs={2}>
                  <img src={IndexImages.IconBoxImg1} />
                </Col>
                <Col xs={10}>
                  <h3>Choose Destination</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </Col>
                <Col xs={2}>
                  <img src={IndexImages.IconBoxImg2} />
                </Col>
                <Col xs={10}>
                  <h3>Check Availability</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </Col>
                <Col xs={2}>
                  <img src={IndexImages.IconBoxImg3} />
                </Col>
                <Col xs={10}>
                  <h3>Let’s Go</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="service-img2" xs={7}>
              <img src={IndexImages.TripHawaiiImg} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="holiday-banner">
        <Container>
          <h2>
            Let’s make your <br></br>
            next holiday amazing
          </h2>
        </Container>
      </section>

      <section className="we-provide">
        <Container>
          <Row>
            <Col>
              <h3>Promotion</h3>
              <h2>We Provide You Best Europe Sightseeing Tours</h2>
              <p>
                Et labore harum non nobis ipsum eum molestias mollitia et
                corporis praesentium a laudantium internos. Non quis eius quo
                eligendi corrupti et fugiat nulla qui soluta recusandae in
                maxime quasi aut ducimus illum aut optio quibusdam!
              </p>
              <Link to="/">View Packages</Link>
            </Col>
            <Col>
              <img src={IndexImages.WeProvideMain} className="main-img" />
            </Col>
          </Row>
          <Row className="destination-options">
            <Col>
              <img src={IndexImages.Destination1} />
            </Col>
            <Col>
              <img src={IndexImages.Destination2} />
            </Col>
            <Col>
              <img src={IndexImages.Destination3} />
            </Col>
            <Col>
              <img src={IndexImages.Destination4} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-explore">
        <Row>
          <Col className="nature">
            <h3>Promotion</h3>
            <h2>Explore Nature</h2>
            <Link to="/">View Packages</Link>
          </Col>
          <Col className="cities">
            <h3>Promotion</h3>
            <h2>Explore cities</h2>
            <Link to="/">View Packages</Link>
          </Col>
        </Row>
      </section>

      <section className="cstm-package">
        <h3>trendy</h3>
        <h2>Our Trending Tour Packages</h2>
        <Container>
          <Row>
            <Col>
              <div className="package">
                <img src={IndexImages.Package3img} />
                <Row>
                  <Col xs={3}>
                    <p>
                      <span>
                        <FaCalendar />
                      </span>{" "}
                      8 Days
                    </p>
                  </Col>
                  <Col xs={5}>
                    <p>
                      <span>
                        <FaUser />
                      </span>{" "}
                      25 People going
                    </p>
                  </Col>
                  <Col xs={4} className="star-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </Col>
                  <Col xs={12} className="content">
                    <h3 className="name">Switzerland</h3>
                    <p>
                      <span>
                        <FaLocationDot />
                      </span>{" "}
                      Europe
                    </p>
                    <h3 className="price">
                      1,000 $ <span>1,200 $</span>
                    </h3>
                    <p className="description">
                      Nam exercitationem commodi et ducimus quia in dolore animi
                      sit mollitia amet id quod eligendi. Et labore harum non
                      nobis ipsum eum molestias mollitia et corporis praesentium
                      a laudantium internos.
                    </p>
                    <Link to="/">Explore Now</Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
            <div className="package two">
                <img src={IndexImages.PackageFirstImg} />
                <Row>
                  <Col xs={3}>
                    <p>
                      <span>
                        <FaCalendar />
                      </span>{" "}
                      8 Days
                    </p>
                  </Col>
                  <Col xs={5}>
                    <p>
                      <span>
                        <FaUser />
                      </span>{" "}
                      30 People going
                    </p>
                  </Col>
                  <Col xs={4} className="star-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </Col>
                  <Col xs={12} className="content">
                    <h3 className="name">Amazon</h3>
                    <p>
                      <span>
                        <FaLocationDot />
                      </span>{" "}
                      Brazil
                    </p>
                    <h3 className="price">
                    1,223 $ <span>1,200 $</span>
                    </h3>
                    <p className="description">
                      Nam exercitationem commodi et ducimus quia in dolore animi
                      sit mollitia amet id quod eligendi. Et labore harum non
                      nobis ipsum eum molestias mollitia et corporis praesentium
                      a laudantium internos.
                    </p>
                    <Link to="/">Explore Now</Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
            <div className="package three">
                <img src={IndexImages.Package2img} />
                <Row>
                  <Col xs={3}>
                    <p>
                      <span>
                        <FaCalendar />
                      </span>{" "}
                      8 Days
                    </p>
                  </Col>
                  <Col xs={5}>
                    <p>
                      <span>
                        <FaUser />
                      </span>{" "}
                      155 People going
                    </p>
                  </Col>
                  <Col xs={4} className="star-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </Col>
                  <Col xs={12} className="content">
                    <h3 className="name">Giza</h3>
                    <p>
                      <span>
                        <FaLocationDot />
                      </span>{" "}
                      Egypt
                    </p>
                    <h3 className="price">
                    1,200 $ <span>1,200 $</span>
                    </h3>
                    <p className="description">
                      Nam exercitationem commodi et ducimus quia in dolore animi
                      sit mollitia amet id quod eligendi. Et labore harum non
                      nobis ipsum eum molestias mollitia et corporis praesentium
                      a laudantium internos.
                    </p>
                    <Link to="/">Explore Now</Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='cstm-testimonial'>
        <Container>
            <h3>Promotion</h3>
            <h2>See What Our Clients Say About Us</h2>
            <CarouselComponent />
        </Container>
    </section>
    </>
  );
}

export default HomePage;
