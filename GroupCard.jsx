import { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { BsBookmarkFill } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi2";
import { BsFire } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "./GroupCard.css"

function GroupCard({ticketCards, handleCheckTicket, handleGetTicketId}) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [displayCard, setDisplayCard] = useState(15);
  const slice = ticketCards.slice(0, displayCard);
  const cardsPerPage = 10;
  const navigate = useNavigate();

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

  /*BuyNow Button */
  const handleBuyNowClick = () => {
    // Navigate to the /paymentform route
    navigate(`/paymentform`);
  };

  /*Handle More Information Button */
  const handleMoreInfoClick = (ticketCardId) => {
    navigate(`/TicketPage/${ticketCardId}`)
    handleGetTicketId(ticketCardId);
  }

  

  return (
    <div className='mx-2 mt-4'>
    <Container fluid >
      <Row xs={1} sm={2} md={3} lg={5} xl={5} className="g-1">
      {slice.map((ticketCard)=> (
        <Col key={ticketCard.id}>
        <Card  
          className="mb-3" 
          bg="transparent"  
          style={{ width: '8rem'}}
          onMouseEnter={() => setHoverIndex(ticketCard.id)}
          onMouseLeave={() => setHoverIndex(-1)}
        >
        {ticketCard.category.trim().toLowerCase() === 'earlybird' && (
              <BsFire style={{ position: 'absolute', top: '5px', left: '3px', fontSize: '1rem', color: '#ff5a00' }} />
            )}
        {ticketCard.category.trim().toLowerCase() === 'promotion' && (
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
          onClick={() => handleCheckTicket(ticketCard)}
        />
        <Card.Img variant="top" src={ticketCard.image} width="227px" height="250px"/>
        <Card.Body>
          <Card.Text>{ticketCard.category}</Card.Text>
          <Card.Title>{ticketCard.title}</Card.Title>
        </Card.Body>

        {hoverIndex === ticketCard.id && (
          <div className="card-buttons">
            <Button 
              variant="primary" 
              className="more-description-button" 
              onClick={() => handleMoreInfoClick(ticketCard.id)}
              
            >
              More Info
            </Button>
            <Button 
              variant="secondary" 
              className="save-button" 
              onClick={handleBuyNowClick}
            >
              Buy Now
            </Button>
          </div>
          )}
      </Card>
      </Col>
    ))}
    </Row>

    {ticketCards.length > 15 && (
    <div className="row justify-content-center mb-3"> 
      <div  className="col-5 col-sm-4 text-center">
        <Button 
          variant={displayCard >= ticketCards.length ? 'outline-secondary' : 'outline-success'}
          block
          onClick={() => handleLoadMoreClick()}
          disabled={displayCard >= ticketCards.length}
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

  {ticketCards.length === 0 && (
    <div className="no-ticket d-flex justify-content-center align-items-center" >
      <HiOutlineTicket style={{ fontSize: '125px', opacity: 0.5 }} />
      <p>There's no any promotion yet</p>
    </div>
  )}
        
  </Container>
  </div>
  );
}

export default GroupCard;