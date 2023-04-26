import React from 'react';
import './App.css';
import FilterDropDown from '../FilterDropdown/FilterDropDown';
import Container from '@mui/material/Container';
import InputLabel from "@mui/material/InputLabel";

function App() {
  
    return (
      <Container>
        <h1>Hello Bootcamper!</h1>
        <FilterDropDown />
      </Container>
    );
  }

  export default App;