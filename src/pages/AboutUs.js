import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IndexImages from "../assets/images/images";
import CarouselComponent from "../components/shared/CarouselComponent";
import { FaCirclePlay } from "react-icons/fa6";
import MainBanner from "../components/shared/MainBanner";

function AboutUs(props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const [pageData, setPageData] = useState({
    title: "",
    image: "",
    subTitle: "",
    pageType: "",
  });

  useEffect(() => {
    setPageData({
      title: "About Us",
      image: IndexImages.aboutImg,
      subTitle: "Read",
      pageType: "about",
    });
  }, []);

  return (
    <>
      <MainBanner pageData={pageData} />
      <section className="aboutpromotion">
        <Container>
          <Row className="main">
            <Col xs={12} lg={6} md={6}>
              <h3>Promotion</h3>
              <h2>We Provide You Best Europe Sightseeing Tours</h2>
              <p>
                Et labore harum non nobis ipsum eum molestias mollitia et
                corporis praesentium a laudantium internos. Non quis eius quo
                eligendi corrupti et fugiat nulla qui soluta recusandae in
                maxime quasi aut ducimus illum aut optio quibusdam!
              </p>
              <Link to="/">view packages</Link>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <img src={IndexImages.aboutpromotionimg}></img>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cstm-video">
        <Container>
          {!isVideoPlaying && <h1>Wanderlust</h1>}
          {!isVideoPlaying && <FaCirclePlay onClick={handleVideoPlay} />}
          {isVideoPlaying && (
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rfJ-6LrD4Ic?si=SXNCBqbtI3I2yZ-H"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          )}
          <div className="overlay"></div>
        </Container>
      </section>

      <section className="cstm-trend">
        <Container>
          <Row className="main">
            <Col xs={12} lg={6} md={6}>
              <img src={IndexImages.Aboutusimg1}></img>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <h3>Trend</h3>
              <h2>Our Popular Tour Plans</h2>
              <p>
                Et labore harum non nobis ipsum eum molestias mollitia et
                corporis praesentium a laudantium. Et labore harum non nobis
                ipsum eum molestias mollitia et corporis praesentium a
                laudantium.
              </p>
              <Row>
                <Col>
                  <img src={IndexImages.Vacation} />
                </Col>
                <Col>
                  <img src={IndexImages.Honeymoon} />
                </Col>
                <Col>
                  <img src={IndexImages.MusicalEvent} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="explore-more">
        <Container>
          <h3>Explore more</h3>
          <h2>Our International Packages</h2>
          <Row className="places">
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.Barcelona} />
                <div className="name-price">
                  <h3>Barcelona</h3>
                  <h3>$840</h3>
                </div>
              </div>
              <div className="main mt">
                <img src={IndexImages.TommorowLand} />
                <div className="name-price">
                  <h3>Tommorow land</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.Switzerland} />
                <div className="name-price">
                  <h3>Switzerland</h3>
                  <h3>$840</h3>
                </div>
              </div>
              <div className="main mt">
                <img src={IndexImages.LosAngelas} />
                <div className="name-price">
                  <h3>Los Angelas</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.RioDeJenero} />
                <div className="name-price">
                  <h3>Rio de Jenero</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.Barcelona2} />
                <div className="name-price">
                  <h3>Barcelona</h3>
                  <h3>$840</h3>
                </div>
              </div>
              <div className="main mt">
                <img src={IndexImages.India} />
                <div className="name-price">
                  <h3>India</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.Barcelona3} />
                <div className="name-price">
                  <h3>Barcelona</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.Maldives} />
                <div className="name-price">
                  <h3>Maldives</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.Barcelona4} />
                <div className="name-price">
                  <h3>Barcelona</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
            <Col xs={6} lg={3} md={3}>
              <div className="main">
                <img src={IndexImages.Pakistan} />
                <div className="name-price">
                  <h3>Pakistan</h3>
                  <h3>$840</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cstm-testimonial">
        <Container>
          <h3>Promotion</h3>
          <h2>See What Our Clients Say About Us</h2>
          <CarouselComponent />
        </Container>
      </section>
    </>
  );
}

export default AboutUs;
