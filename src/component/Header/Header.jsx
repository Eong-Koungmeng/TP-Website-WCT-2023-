import React from "react"
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link, useMatch, useResolvedPath, useNavigate} from "react-router-dom"

import "./Header.css"

import { FaUserLarge } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";

import logo from "../../asset/logo.png"
import englishFlag from "../../asset/United-Kingdom.png"
// import khmerFlag from "../asset/United-Kingdom.png"


function CustomLink({ to, children, ...props}) {
  // const path = window.location.pathname //It can't ensure 100% correctly  since pages is never refresh just only section inside route
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end:true}) //Use end: true to avoid the partial matched 

  return (
    <li className={ isActive ? "active" : ""}>
      <Link to ={to} {...props} className="nav-link">
        {children}
      </Link>
    </li>
  )
}

function Header() {
  const navigate = useNavigate();

  const handleAboutUsOnClick = () => {
    // Navigate to the /paymentform route
    navigate("/AboutUs");
  };

  const handleContactUsOnClick = () => {
    navigate("/ContactUs");
  }

  const handleTicketOnClick = () => {
    navigate("/Ticket");
  }

  return ( 
    <header className="header-wrapper">
      {/* Header */}
        <Navbar expand='lg' data-bs-theme="dark" fixed="top" className="bg-body-tertiary ">
          
            {/* Navbar Brand */}
            <Navbar.Brand>
              <img src={logo} width="80" height="40" className="d-inline-block align-top" alt="Your Brand Logo"/>
            </Navbar.Brand>    

            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">         

                  {/* Nav Container */}
                  <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                    <CustomLink to="/home" >Home</CustomLink>
                    <CustomLink to="/AboutUs" onClick={handleAboutUsOnClick} >About us</CustomLink>
                    <CustomLink to="/ContactUs" onClick={handleContactUsOnClick}>Contact us</CustomLink>
                    <CustomLink to="/Ticket" onClick={handleTicketOnClick}>Ticket</CustomLink>
                    <CustomLink to="/Save" >
                        <BsBookmarkFill  size="0.8rem" className="header-icon"/>
                    </CustomLink>
                    <CustomLink to="/Notification" >
                        <IoMdNotifications size="1rem" className="header-icon" />
                    </CustomLink>
                    <CustomLink to="/Login">
                        <FaUserLarge size="0.8rem" className="header-icon" />
                    </CustomLink>

                    <div className="language-container">
                      <img 
                        src={englishFlag}
                        className="flag"
                        alt=""
                      />

                      <NavDropdown 
                        title="Language"
                        id="dropdown-menu-align-end"
                        className="custom-dropdown "
                        drop="down-centered" 
                        
                      >
                         
                        <NavDropdown.Item className="dropdown-item ">English</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="dropdown-item ">Khmer</NavDropdown.Item> 
                      </NavDropdown>
                    </div>  
                  </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}
export default Header;
