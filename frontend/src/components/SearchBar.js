import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Search } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SearchBar.scss';

const SearchBar = (props) => {
  const [text, setText] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    // Call something props. call api to search over value.
    props.filterPhotos(e.target.value);
  };

  return (
    <InputGroup size="sm">
      <InputGroup.Text id="search"><Search size={ 13 } /></InputGroup.Text>
      <Form.Control
        id="search-input"
        placeholder="Search"
        value={ text }
        onChange={ handleOnChange }
      />
    </InputGroup>
  );
};

export default SearchBar;