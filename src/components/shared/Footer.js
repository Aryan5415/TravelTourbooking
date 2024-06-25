import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IndexImages from '../../assets/images/images';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="cstm-footer">
    <Container>
      <Row className='upper'>
        <Col xs={4} className='first'>
        <a>
        <img src={IndexImages.footerlogo}></img></a>
        <p>Travel helps companies<br /> manage payments easily.</p>
        <div className='social-icons'>
        <a href="/"><FaLinkedinIn /></a>
        <a href="/"><FaFacebookMessenger /></a>
        <a href="/"><FaTwitter /></a>
        <a href="/"><FaInfinity /></a>
        </div>
        </Col>
        <Col xs={2} className='cstm-nav'>
        <h3>Company</h3>
        <ul>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/'>Careers</Link>
          </li>
          <li>
            <Link to='/'>Blog</Link>
          </li>
          <li>
            <Link to='/'>Pricing</Link>
          </li>
        </ul>
        </Col>
        <Col xs={2} className='cstm-nav'>
        <h3>Destinations</h3>
        <ul>
          <li>
            <Link to='/'>Maldives</Link>
          </li>
          <li>
            <Link hto='/'>Los Angelas</Link>
          </li>
          <li>
            <Link to='/'>Las Vegas</Link>
          </li>
          <li>
            <Link to='/'>Torronto</Link>
          </li>
        </ul>
        </Col>
        <Col xs={4} className='cstm-newsletter'>
        <h3>Join Our Newsletter</h3>
        <Form>
        <Form.Control type="email" placeholder="Your email address" />
        <Button variant="primary" type="submit">
        Subscribe
      </Button>
          </Form>
          <p>*  Will send you weekly updates for your better
          tour packages.</p>
        </Col>
      </Row>
      <p className='copyright'>Copyright @ Xpro 2022. All Rights Reserved.</p>
      </Container>
      </div>
    </>
  )
}

export default Footer