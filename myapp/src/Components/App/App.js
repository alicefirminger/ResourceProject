import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import FilterDropDown from "../FilterDropdown/FilterDropDown";

function App() {
  return (
    <Container maxWidth="sm">
      <FilterDropDown />
    </Container>
  );
}

export default App;
