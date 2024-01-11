//React's Component
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"

import { Container } from "react-bootstrap";
//Library
import axios from "axios";
//Component
import Layout from "./component/Layout/Layout"
//Page
import Home from "./page/HomePage/Home"
import Profile from "./page/ProfilePage/Profile"
import Save from "./page/SavePage/Save"
import TicketPage from "./page/TicketPage/TicketPage"
import Notification from "./page/NotificationPage/Notification"
import PaymentForm from './component/Payment/Payment';
import ContactUs from "./page/ContactUsPage/ContactUs";
import AboutUsPage from "./page/AboutUsPage/AboutUsPage";
import Ticket from "./page/PurchasedTicketPage/Ticket";
// import Signup from "./component/SignUp/SignUp";
// import Login from "./component/Login/Login";
import Login1 from "./component/Login/Login1"
import END_POINTS from './api/apiConfig';

import "./App.scss"
import { LanguageProvider } from "./context/LanguageContext";

function App()
{
  const [saveTickets, setSaveTickets] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [carouselFetched, setCarouselFetched] = useState(false);



  /*Fetching Data Function */
  const fetchData = async (endpoints, setData) =>
  {
    try
    {
      const response = await axios.get(END_POINTS[endpoints]);
      const data = response.data;

      setData(data);
    } catch (error)
    {
      console.error("Error fetching carousel Data: ", error)
    }
  }
  /*Fetching Carousel Data */
  useEffect(() =>
  {
    const fetchCarousel = async () =>
    {
      await fetchData('carouselData', setCarouselData);
      setCarouselFetched(true);
    };

    fetchCarousel();
  }, []);
  /*Fetching ticket Data */
  useEffect(() =>
  {
    if (carouselFetched)
    {
      fetchData('ticketData', setTicketData);
    }
  }, [carouselFetched]);

  /* BookMark Function */
  const handleCheckTicket = (ticketCard) =>
  {
    const TicketExisted = saveTickets.find((saveTicket) => saveTicket.id === ticketCard.id);
    if (TicketExisted)
    {
      setSaveTickets(
        saveTickets.filter((saveTicket) => saveTicket.id !== ticketCard.id)
      )
    }
    else
    {
      setSaveTickets([...saveTickets, { ...ticketCard, quantity: 1 }])
    }

  }
  /** */

  return (
    <LanguageProvider>
      <Layout>
        <Container className="container">
          <Routes>
            <Route index element={<Home
              slides={carouselData}
              ticketCards={ticketData}
              handleCheckTicket={handleCheckTicket}
            />}
            />
            <Route path="/Home" element={<Home
              slides={carouselData}
              ticketCards={ticketData}
              saveTickets={saveTickets}
              handleCheckTicket={handleCheckTicket}
            />}
            />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Save" element={<Save
              saveTickets={saveTickets}
              handleCheckTicket={handleCheckTicket} />}
            />
            <Route path="/TicketPage/:id" element={<TicketPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/paymentform" element={<PaymentForm />} />
            <Route path="/Ticket" element={<Ticket />} />
            {/* <Route  path="/Login" element={<Login />} />
              <Route  path="/Signup" element={<Signup />} /> */}
            <Route path="/Register" element={<Login1 />} />

          </Routes>
        </Container>
      </Layout>
    </LanguageProvider>

  );
}

export default App;

