import React from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../asset/logo.png';

import "./Footer.scss"

const Footer = () => {
  return (
    <>
      <Container  fluid expand='lg' data-bs-theme="dark" className="bg-body-tertiary footer-container">
        <Row>
          <Col className='footer-col'>
            <img
              src={logo}
              width="85"
              height="50"
              className="d-inline-block align-top"
              alt="Your Brand Logo"
            />
            <p className="footer-text">
              A ticket purchasing website is an online platform that allows
              users to browse, select, and purchase tickets for various events,
              activities, transportation services, or experiences.
            </p>
            <div className="footer-icon">
              <FaFacebook color="white" size="1rem"/>
              <FaInstagram color="white" size="1rem"/>
              <FaTiktok color="white" size="1rem" />
            </div>
          </Col>
          <Col className='footer-quick-access'>
            <h3>Quick Access</h3>
            <Nav as="ul" className="me-auto ">
            <Nav.Item as="li" >
                <Nav.Link to="/search">Search</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/ticket">Ticket</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/notification">Search</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/save">Save</Nav.Link>
                </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <h3>Contact Information</h3>
            <Nav as="ul" className="me-auto ">
            <Nav.Item as="li" >
                <Nav.Link to="/search">+855-12-345-786</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/ticket">Ticket.purchasing.info@gmail.com</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/profile">telegram</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/notification">whatapp</Nav.Link>
                </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;