import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";

import "./Header.css";

import { FaUserLarge } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";

import logo from "../../asset/logo.png";
import englishFlag from "../../asset/United-Kingdom.png";
import cambodiaFlag from "../../asset/Cambodia.png";
import { LanguageContext } from "../../context/LanguageContext";
import { trans } from "../../utils/locales";
// import khmerFlag from "../asset/United-Kingdom.png"

function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname //It can't ensure 100% correctly  since pages is never refresh just only section inside route
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true }); //Use end: true to avoid the partial matched

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className="nav-link">
        {children}
      </Link>
    </li>
  );
}

function Header() {
  const navigate = useNavigate();
  const { lang, setLang } = useContext(LanguageContext);

  const handleAboutUsOnClick = () => {
    // Navigate to the /paymentform route
    navigate("/AboutUs");
  };

  const handleContactUsOnClick = () => {
    navigate("/ContactUs");
  };

  const handleTicketOnClick = () => {
    navigate("/Ticket");
  };

  return (
    <header className="header-wrapper">
      {/* Header */}
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        fixed="top"
        className="bg-body-tertiary "
      >
        {/* Navbar Brand */}
        <Navbar.Brand>
          <img
            src={logo}
            width="80"
            height="40"
            className="d-inline-block align-top"
            alt="Your Brand Logo"
          />
        </Navbar.Brand>

        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav Container */}
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
              <CustomLink to="/home">{trans("header.home", lang)}</CustomLink>
              <CustomLink to="/AboutUs" onClick={handleAboutUsOnClick}>
                {trans("header.aboutUs", lang)}
              </CustomLink>
              <CustomLink to="/ContactUs" onClick={handleContactUsOnClick}>
                {trans("header.contactUs", lang)}
              </CustomLink>
              <CustomLink to="/Ticket" onClick={handleTicketOnClick}>
                {trans("header.ticket", lang)}
              </CustomLink>
              <CustomLink to="/Save">
                <BsBookmarkFill size="0.8rem" className="header-icon" />
              </CustomLink>
              <CustomLink to="/Notification">
                <IoMdNotifications size="1rem" className="header-icon" />
              </CustomLink>
              <CustomLink to="/Login">
                <FaUserLarge size="0.8rem" className="header-icon" />
              </CustomLink>

              <div className="language-container">
                {lang === "en" ? (
                  <img src={englishFlag} className="flag" alt="" />
                ) : (
                  <img src={cambodiaFlag} className="flag" alt="" />
                )}
                <NavDropdown
                  title={trans("header.language", lang)}
                  id="dropdown-menu-align-end"
                  className="custom-dropdown "
                  drop="down-centered"
                >
                  <NavDropdown.Item
                    className="dropdown-item "
                    onClick={() => setLang("en")}
                  >
                    {trans("header.english", lang)}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className="dropdown-item "
                    onClick={() => setLang("kh")}
                  >
                    {trans("header.khmer", lang)}
                  </NavDropdown.Item>
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
