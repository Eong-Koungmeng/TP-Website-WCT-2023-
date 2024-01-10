// Description.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import END_POINTS from '../../api/apiConfig';
import axios from "axios";


import "./TicketPage.scss"; // Import your SCSS file

const TicketPage = (selectedTicketData) => {
  const navigate = useNavigate();
 
  const handleBuyNowClick = () => {
    // You can navigate to the payment form route here
    navigate("/paymentform");
  };

  return (
    <Container className="ticketpage-container">
      <Row>
        <Col xs={12} lg={6} className="image-col">
          {/* Image on the left side */}
          <Card.Img src={selectedTicketData.image} alt={selectedTicketData.title} className="card-img" />
        </Col>
        <Col xs={12} lg={6} className="info-col">
          {/* Information on the right side */}
          <Card className="ticketpage-card">
            <Card.Body className="card-body">
              <Card.Title>{selectedTicketData.title}</Card.Title>
              <Card.Text className="ticketpage-text">
                <FaCalendarAlt/> {selectedTicketData.date}
                <br />
                <FaClock /> {selectedTicketData.time}
                <br />
                <FaMoneyBill /> {selectedTicketData.price}
              </Card.Text>
              <div className="button-container">
                <button className="buy-now-button" onClick={handleBuyNowClick}>
                  Buy Now
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
