import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IndexImages from "../../assets/images/images";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="cstm-footer">
        <Container>
          <Row className="upper">
            <Col lg={4} sm={12} md={6} className="first">
              <a>
                <img src={IndexImages.footerlogo} alt="footerlogo" />
              </a>
              <p>
                Travel helps companies
                <br /> manage payments easily.
              </p>
              <div className="social-icons">
                <Link to="/">
                  <FaLinkedinIn />
                </Link>
                <Link to="/">
                  <FaFacebookMessenger />
                </Link>
                <Link to="/">
                  <FaTwitter />
                </Link>
                <Link to="/">
                  <FaInfinity />
                </Link>
              </div>
            </Col>
            <Col lg={2} sm={12} md={6} className="cstm-nav">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2} sm={12} md={6} className="cstm-nav">
              <h3>Destinations</h3>
              <ul>
                <li>
                  <Link to="/">Maldives</Link>
                </li>
                <li>
                  <Link hto="/">Los Angelas</Link>
                </li>
                <li>
                  <Link to="/">Las Vegas</Link>
                </li>
                <li>
                  <Link to="/">Torronto</Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} sm={12} md={6} className="cstm-newsletter">
              <h3>Join Our Newsletter</h3>
              <Form>
                <Form.Control type="email" placeholder="Your email address" />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
              <p>
                * Will send you weekly updates for your better tour packages.
              </p>
            </Col>
          </Row>
          <p className="copyright">
            Copyright @ Xpro 2022. All Rights Reserved.
          </p>
        </Container>
      </div>
    </>
  );
}

export default Footer;
