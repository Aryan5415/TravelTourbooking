import React, { useEffect, useState } from "react";
import IndexImages from "../assets/images/images";
import { Col, Container, Row } from "react-bootstrap";
import MainBanner from "../components/shared/MainBanner";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Packages() {
  const [pageData, setPageData] = useState({
    title: "",
    image: "",
    subTitle: "",
    pageType: "",
  });

  useEffect(() => {
    setPageData({
      title: "Travel With Us",
      image: IndexImages.PackageBanner,
      subTitle: "Search tour",
      pageType: "upcomingpackage",
    });
  }, []);
  return (
    <>
    <MainBanner pageData={pageData} />
      <section className="upcomingpackages">
        <Container>
          <Row className="upper">
            <Col>
              <h3>
                <span>
                  <img src={IndexImages.Calender} />
                </span>
                Date
              </h3>
            </Col>
            <Col>
              <h3>
                <span>
                  <img src={IndexImages.Upload} />
                </span>
                price low to High
              </h3>
            </Col>
            <Col>
              <h3>
                <span>
                  <img src={IndexImages.Upload1} />
                </span>
                Price High to low
              </h3>
            </Col>
            <Col>
              <h3>
                <span>
                  <img src={IndexImages.Pencil} />
                </span>
                Name (A-z)
              </h3>
            </Col>
          </Row>
          <Row className="lower">
            <Col xs={8}>
            <Row>

              <Col xs={6}>
              <Link to="/">
              <div className="onhover">
              <img src={IndexImages.CstmPackageimg1} className="main"/>
              <div className="afterimg">
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.CalenderWhite} />
                </span>
                12, September 2022
              </h3>
                </div>
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.User3} />
                </span>
                120+ People
              </h3>
                </div>
              </div>
              <div className="content">
              <h2 className="name">
              Switzerland
              </h2>
              <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
              <div className="price-rating">
                <p>1,100 $</p>
                <p><FaStar />5.0</p>
              </div>
              </div>
              </div>
              </Link>

              </Col>
              <Col xs={6}>
              <Link to="/">
              <div className="onhover">
              <img src={IndexImages.CstmPackageimg1} className="main"/>
              <div className="afterimg">
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.CalenderWhite} />
                </span>
                12, September 2022
              </h3>
                </div>
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.User3} />
                </span>
                120+ People
              </h3>
                </div>
              </div>
              <div className="content">
              <h2 className="name">
              Berlin 
              </h2>
              <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
              <div className="price-rating">
                <p>1,230 $</p>
                <p><FaStar />4.9</p>
              </div>
              </div>
              </div>
              </Link>
              </Col>
              <Col xs={6}>
              <Link to="/">
              <div className="onhover">
              <img src={IndexImages.CstmPackageimg1} className="main"/>
              <div className="afterimg">
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.CalenderWhite} />
                </span>
                12, September 2022
              </h3>
                </div>
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.User3} />
                </span>
                120+ People
              </h3>
                </div>
              </div>
              <div className="content">
              <h2 className="name">
              Maldives
              </h2>
              <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
              <div className="price-rating">
                <p>3,000 $</p>
                <p><FaStar />5.0</p>
              </div>
              </div>
              </div>
              </Link>
              </Col>
              <Col xs={6}>
              <Link to="/">
              <div className="onhover">
              <img src={IndexImages.CstmPackageimg1} className="main"/>
              <div className="afterimg">
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.CalenderWhite} />
                </span>
                12, September 2022
              </h3>
                </div>
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.User3} />
                </span>
                120+ People
              </h3>
                </div>
              </div>
              <div className="content">
              <h2 className="name">
              Torronto
              </h2>
              <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
              <div className="price-rating">
                <p>2,000 $</p>
                <p><FaStar />4.6</p>
              </div>
              </div>
              </div>
              </Link>
              </Col>
              <Col xs={6}>
              <Link to="/">
              <div className="onhover">
              <img src={IndexImages.CstmPackageimg1} className="main"/>
              <div className="afterimg">
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.CalenderWhite} />
                </span>
                12, September 2022
              </h3>
                </div>
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.User3} />
                </span>
                120+ People
              </h3>
                </div>
              </div>
              <div className="content">
              <h2 className="name">
              Baku
              </h2>
              <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
              <div className="price-rating">
                <p>1,440 $</p>
                <p><FaStar />5.0</p>
              </div>
              </div>
              </div>
              </Link>
              </Col>
              <Col xs={6}>
              <Link to="/">
              <div className="onhover">
              <img src={IndexImages.CstmPackageimg1} className="main"/>
              <div className="afterimg">
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.CalenderWhite} />
                </span>
                12, September 2022
              </h3>
                </div>
                <div className="inner">
                <h3>
                <span>
                  <img src={IndexImages.User3} />
                </span>
                120+ People
              </h3>
                </div>
              </div>
              <div className="content">
              <h2 className="name">
              Chinese
              </h2>
              <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
              <div className="price-rating">
                <p>1,210 $</p>
                <p><FaStar />4.0</p>
              </div>
              </div>
              </div>
              </Link>
              </Col>


            </Row>
            
            </Col>
            <Col xs={4}>
            
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Packages;
