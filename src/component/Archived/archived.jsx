// const jsonData = {
//   // ... (your provided JSON data)
// };

// // Find the ticket with ID "2"
// const ticketIdToFind = "2";
// const ticketWithId2 = jsonData.Ticket.find(ticket => ticket.id === ticketIdToFind);

// // Retrieve the "standard" cost value from the ticket with ID "2"
// let standardCost = null;
// if (ticketWithId2) {
//   const standardCostObject = ticketWithId2.cost.find(cost => cost.hasOwnProperty('standard'));
//   if (standardCostObject) {
//     standardCost = standardCostObject.standard;
//   }
// }

// console.log('Standard Cost from Ticket ID 2:', standardCost);
// ===========================================================================
// ===========================================================================
// const [carouselData, carouselLoading] = useFetch("http://localhost:3000/carouselData")
// const [ticketData, ticketLoading] = useFetch("http://localhost:3000/ticketData")
// const [saveTickets, setSaveTickets] = useState([]);

  
// if (carouselLoading || ticketLoading) {
//   return <div>Loading...</div>;
// }

// if (!carouselData || !ticketData) {
//   return <div>No data available</div>;
// }
// =========================================================
// FETCHING DATA
// ==========================================================
// import {useState, useEffect} from "react";

// const useFetch = url => {
//     const [contentData, setContentData] = useState([]);

//     useEffect(() => {
//         async function getContentData() {
//             const response = await fetch(url);
//             const data = await response.json();
//             setContentData(data);
//         }
//         getContentData();
//         console.log(contentData, "content");
//     });

// }

// export default useFetch;
// =================================================================
// =================================================================
// import { useState, useEffect } from 'react'

// const useFetch = url => {
//     const [state, setState] = useState([null, false])

//     useEffect(() => {
//         setState([null, true]);

//         async () => {
//             const data = await fetch(url)
//                 .then(res => res.json())

//             setState([data.body, false])
//         }
//     }, [url])

//     return state
// };

// export default useFetch
// ===============================================================
// {/*Normal useFetch Hook */}
// ===============================================================
// const fetchContentData = () => {
//   fetch("http://localhost:3001/carouselData")
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       setCarouselData(data)
//     })
// }

// useEffect(() => {
//   fetchContentData()
// }, [])
//===============================================================
//===============================================================
// import {useEffect, useState} from "react";
// import axios from "axios";

// function useFetchData(url) {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState([]);

//     useEffect(() => {
//         setLoading(true);
//         axios
//             .get(url)
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, [url]);

//     const refetch = () => {
//         setLoading(true);
//         axios
//             .get(url)
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((err) => {
//                 setError(err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     };
  
//     return {data, loading, error, refetch};
// }

// export default useFetchData
//=======================================================================
// App -> Fetching only 1 (2 Error)
//=======================================================================
// const {data: carouselData, loading: carouselLoading, error: carouselError} = useFetchData(" http://localhost:3001/carouselData");

// if (carouselLoading) return <p> Loading </p>;
// if (carouselError) console.log(carouselError);

// const {data: ticketData} = useFetchData("http://localhost:3001/ticketData");
//=======================================================================
// APP -> Problem: React Hook "useFetchData" is called in function "fetchDataSequentially" that is neither a React function component nor a custom React Hook function
//=======================================================================
// const [carouselData, setCarouselData] = useState([]);
//   const [ticketData, setTicketData] = useState([]);

//   useEffect(() => {
//     const fetchDataSequentially = async () => {
//       try {
//         const { data: fetchedCarouselData } = await useFetchData("http://localhost:3001/carouselData");
//         setCarouselData(fetchedCarouselData);

//         const { data: fetchedTicketData } = await useFetchData("http://localhost:3001/ticketData");
//         setTicketData(fetchedTicketData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchDataSequentially();
//   }, []);
//======================================================================
// APP->Fetching Both All
// Problem: Threaten the limitation of arrays
//=======================================================================
// {/*Fetching Data From Json Server */}
  // const fetchData = () => {
  //   const urlCarouselData = "http://localhost:3001/carouselData";
  //   const urlTicketData = "http://localhost:3001/ticketData";

  //   const getCarouselData = axios.get(urlCarouselData);
  //   const getTicketData = axios.get(urlTicketData);
  //   axios.all([getCarouselData, getTicketData]).then(
  //     axios.spread((getCarouselData, getTicketData) => {
  //       const carouselData = getCarouselData.data;
  //       const ticketData = getTicketData.data;

  //       setCarouselData(carouselData);
  //       setTicketData(ticketData);
  //     })
  //   )
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
//=======================================================================
//GroupCard-> Trying to set Condition when Retrieve 
//=======================================================================
// import { useState } from 'react';
// import { Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { BsBookmarkFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

// import "./GroupCard.scss"



// function GroupCard({ticketCards, handleCheckTicket, handleLoadMoreClick}) {
//   const [hoverIndex, setHoverIndex] = useState(-1);
//   const [displayCard, setDisplayCard] = useState(15);
//   const slice = ticketCards.slice(0, displayCard);
//   const navigate = useNavigate();
  
  
//   /*LoadMore Button */
//   const handleLoadLessClick = () => {
//     if (displayCard > 15) {
//       const newDisplayCard = displayCard - 10;
//       setDisplayCard(newDisplayCard < 15 ? 15 : newDisplayCard); 
//     }
//   }
//   /*BuyNow Button */
//   const handleBuyNowClick = () => {
//     // Navigate to the /paymentform route
//     navigate("/paymentform");
//   };



  

//   return (
//     <Container fluid >
//       <Row xs={1} sm={2} md={3} lg={5} xl={5} className="g-4">
//       {slice.map((ticketCard)=> (
//         <Col key={ticketCard.id}>
//         <Card  
//           className="mb-3" 
//           bg="transparent"  
//           style={{ width: '8rem'}}

//           onMouseEnter={() => setHoverIndex(ticketCard.id)}
//           onMouseLeave={() => setHoverIndex(-1)}
//         >
//         <BsBookmarkFill  size="0.8rem" className="save-icon" onClick={() => handleCheckTicket(ticketCard)}/>
//         <Card.Img variant="top" src={ticketCard.image} width="227px" height="250px"/>
//         <Card.Body>
//           <Card.Text>{ticketCard.date}</Card.Text>
//           <Card.Title>{ticketCard.title}</Card.Title>
//         </Card.Body>

//         {hoverIndex === ticketCard.id && (
//           <div className="card-buttons">
//             <Button variant="primary" className="more-description-button">
//               More Info
//             </Button>
//             <Button variant="secondary" className="save-button" onClick={handleBuyNowClick}>
//               Buy Now
//             </Button>
//           </div>
//           )}
//       </Card>
//       </Col>
//     ))}
//     </Row>
//     <div className="row justify-content-center mb-3"> 
//       <div  className="col-5 col-sm-4 text-center">
//         <Button 
//           variant="outline-success"
//           block
//           onClick={handleLoadMoreClick}
//         >
//           Load More
//         </Button>
//       </div>

//       <div className="col-5 col-sm-4 text-center">
//         <Button 
//           variant="outline-success"
//           block
//           onClick={() => handleLoadLessClick()}
//         >
//           Load Less
//         </Button>
//       </div>
//     </div>
        
//   </Container>
//   );
// }

// export default GroupCard;
//=======================================================================
//APP-> Trying to set Condition when Retrieve 
//=======================================================================
//React's Component
// import { useState, useEffect } from "react";
// import {Routes, Route} from "react-router-dom"
// import { Container } from "react-bootstrap";
// //Library
// import axios from "axios";
// //Component
// import Layout from "./component/Layout"
// //Page
// import Home from "./page/Home"
// import Profile from "./page/Profile"
// import Save from "./page/Save"
// import TicketPage from "./page/TicketPage"
// import Notification from "./page/Notification"
// import PaymentForm from './component/Payment';
// import ContactUs from "./page/ContactUs";
// import AboutUsPage from "./page/AboutUsPage";
// import Ticket from "./page/Ticket";

// import END_POINTS from './api/apiConfig';

// import "./App.scss"

// function App() {
//   const [saveTickets, setSaveTickets] = useState([]); 
//   const [carouselData, setCarouselData] = useState([]);
//   const [ticketData, setTicketData] = useState([]);
//   const [carouselFetched, setCarouselFetched] = useState(false);
//   const [loadDisplayCard, setLoadDisplayCard] = useState(15);
  
//   /*Fetching Data Function */
//   const fetchData = async (endpoints, setData, loadDisplayCard) => {
//     try {
//       const response = await axios.get(END_POINTS[endpoints]);
//       const data = response.data;
      
//       setData(data.slice(0, loadDisplayCard));
//     } catch (error) {
//       console.error("Error fetching carousel Data: ", error)
//     }
//   }

//   /*LoadMore Button */
//   const handleLoadMoreClick = () => {
//     const addDisplayCard = loadDisplayCard + 10;
//     fetchData('ticketData', setTicketData, addDisplayCard);
//     setLoadDisplayCard(addDisplayCard);
//   }

//   /*Fetching Carousel Data */
//   useEffect(() => {
//     const fetchCarousel = async () => {
//       await fetchData('carouselData', setCarouselData);
//       setCarouselFetched(true);
//     };

//     fetchCarousel();
//   }, []);
//   /*Fetching Ticket Data */
//   useEffect(() => {
//     if (carouselFetched) {
//       fetchData('ticketData', setTicketData, loadDisplayCard);
//     }
//   }, [carouselFetched, loadDisplayCard]);

//   /* BookMark Function */
//   const handleCheckTicket = (ticketCard) => {
//     const TicketExisted = saveTickets.find((saveTicket) => saveTicket.id === ticketCard.id);
//     if (TicketExisted) {
//       setSaveTickets(
//         saveTickets.filter((saveTicket) => saveTicket.id !== ticketCard.id)
//       )
//     }
//     else {
//       setSaveTickets([...saveTickets, {...ticketCard, quantity: 1}])
//     }
    
//   }

//   return (
//     <Layout>
//       <Container className="container">
//           <Routes>
//               <Route index element={<Home 
//                 slides={carouselData}
//                 ticketCards={ticketData}  
//                 handleCheckTicket={handleCheckTicket}
//                 handleLoadMoreClick = {handleLoadMoreClick}
//                 />}  
//               />
//               <Route  path="/Home" element={<Home 
//                 slides={carouselData} 
//                 ticketCards={ticketData} 
//                 handleCheckTicket={handleCheckTicket} />} 
//               />
//               <Route  path="/Profile" element={<Profile />} />
//               <Route  path="/Save" element={<Save 
//                 saveTickets={saveTickets} 
//                 handleCheckTicket={handleCheckTicket}/>} 
//               />
//               <Route  path="/TicketPage" element={<TicketPage />} /> 
//               <Route  path="/ContactUs" element={<ContactUs />} />  
//               <Route  path="/AboutUs" element={<AboutUsPage /> }/>
//               <Route  path="/Notification" element={<Notification />} />
//               <Route path="/paymentform" element={<PaymentForm />} />
//               <Route  path="/Ticket" element={<Ticket />} />
              
//           </Routes>
//       </Container>
//     </Layout>
    
//   );
// }
//================================================================================
  /*More Information Button */
//================================================================================
// const handleMoreInfoClick = (selectedTicketId) => {
//   const selectedTicket = ticketData.find((ticketData) => ticketData.id === selectedTicketId);
//   if (selectedTicket) {
//     setSelectedTickets([selectedTicket]);
//   }
// };

// useEffect(() => {
//   if (selectedTickets.length > 0) {
//     navigate(`/TicketPage/${selectedTickets[0].id}`);
//   }
// }, [selectedTickets, navigate]);
//================================================================================
//================================================================================

//================================================================================
//================================================================================

//================================================================================
//================================================================================