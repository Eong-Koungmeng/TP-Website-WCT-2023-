import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { LuSearch } from "react-icons/lu";
import "./Search.scss";
import { LanguageContext } from "../../context/LanguageContext";
import { trans } from "../../utils/locales";

const Search = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { lang } = useContext(LanguageContext);

  const handleSearchClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <Container
      xs="auto"
      className={`search-wrapper ${isClicked ? "clicked" : ""}`}
      onClick={handleSearchClick}
      onBlur={handleBlur}
    >
      <Form.Control
        type="text"
        placeholder={trans("search", lang)}
        className="mr-sm-2 form-control"
      />
      <LuSearch size="1.25rem" color="white" />
    </Container>
  );
};

export default Search;
