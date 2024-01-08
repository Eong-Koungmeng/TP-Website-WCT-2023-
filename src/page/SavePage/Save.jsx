import React from 'react'
import "../../component/GroupCard/GroupCard.scss"
import { BsBookmarkFill } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { BsFire } from "react-icons/bs";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { BiSolidOffer } from "react-icons/bi";




const Save = ({saveTickets, handleCheckTicket}) => {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [displayCard, setDisplayCard] = useState(15);
    const slice = saveTickets.slice(0, displayCard);
    const cardsPerPage = 10;
    
    const navigate = useNavigate();

    const handleBuyNowClick = () => {
        // Navigate to the /paymentform route
        navigate("/paymentform");
    };

    /*LoadMore Button */
  const handleLoadMoreClick = () => {
    const newDisplayCards = displayCard + cardsPerPage;
    setDisplayCard(newDisplayCards);
  }
  /*LoadMore Button */
  const handleLoadLessClick = () => {
    if (displayCard > 15) {
      const newDisplayCards = displayCard - cardsPerPage;
      setDisplayCard(newDisplayCards < 15 ? 15 : newDisplayCards); 
    }
  }

  return (
    <div className="save-tickets mt-5 mx-5">

      {saveTickets.length === 0 && (
        <div className="no-ticket d-flex justify-content-center align-items-center" >
        <HiOutlineTicket style={{ fontSize: '125px', opacity: 0.5 }} />
        <p>No Item was Saved</p>
      </div>
      )}

      <Container fluid >
            <Row xs={1} sm={2} md={3} lg={5} xl={5} className="g-4">
            {slice.map((saveTickets)=> (
              <Col key={saveTickets.id}>
              <Card  
                className="mb-3" 
                bg="transparent"  
                style={{ width: '8rem'}}

                onMouseEnter={() => setHoverIndex(saveTickets.id)}
                onMouseLeave={() => setHoverIndex(-1)}
              >
              {saveTickets.category.trim().toLowerCase() === 'earlybird' && (
                    <BsFire style={{ position: 'absolute', top: '5px', left: '3px', fontSize: '1rem', color: '#ff5a00' }} />
                  )}
              {saveTickets.category.trim().toLowerCase() === 'promotion' && (
                  <BiSolidOffer style={{ position: 'absolute', top: '5px', left: '3px', fontSize: '1rem', color: '#1bd04c' }} />
                )}
              <BsBookmarkFill  
                style={{ 
                  position: 'absolute', 
                  bottom: '5px', 
                  right: '3px', 
                  fontSize: '1rem',
                }} 
                className="save-icon" 
                onClick={() => handleCheckTicket(saveTickets)}
              />
              <Card.Img variant="top" src={saveTickets.image} width="227px" height="250px"/>
              <Card.Body>
                <Card.Text>{saveTickets.category}</Card.Text>
                <Card.Title>{saveTickets.title}</Card.Title>
              </Card.Body>

              {hoverIndex === saveTickets.id && (
                <div className="card-buttons">
                  <Button variant="primary" className="more-description-button">
                    More Info
                  </Button>
                  <Button variant="secondary" className="save-button" onClick={handleBuyNowClick}>
                    Buy Now
                  </Button>
                </div>
                )}
            </Card>
            </Col>
          ))}
          </Row>

          {saveTickets.length > 15 && (
          <div className="row justify-content-center mb-3"> 
            <div  className="col-5 col-sm-4 text-center">
              <Button 
                variant={displayCard >= saveTickets.length ? 'outline-secondary' : 'outline-success'}
                block
                onClick={() => handleLoadMoreClick()}
                disabled={displayCard >= saveTickets.length}
              >
                Load More
              </Button>
            </div>

            <div className="col-5 col-sm-4 text-center">
              <Button 
                variant={displayCard <= 15 ? 'outline-secondary' : 'outline-success'}
                block
                onClick={() => handleLoadLessClick()}
                disabled={displayCard <= 15}
              >
                Load Less
              </Button>
            </div>
          </div>
          )}
          </Container>
    </div>
  )
}

export default Save
