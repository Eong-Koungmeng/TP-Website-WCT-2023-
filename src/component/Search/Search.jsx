import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { LuSearch } from "react-icons/lu";
import "./Search.scss"


const Search = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleSearchClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
      <Container 
        xs="auto" 
        className={`search-wrapper ${isClicked ? 'clicked' : ''}` } 
        onClick={handleSearchClick}
        onBlur={handleBlur} >
          
        <Form.Control
          type="text"
          placeholder="Search"
          className= "mr-sm-2 form-control"
        />
        < LuSearch size="1.25rem" color="white"/>
      </Container>
  )
}

export default Search

