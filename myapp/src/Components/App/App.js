import React from "react";
import "./App.css";
import FilterDropDown from "../FilterDropdown/FilterDropDown";
import Navbar from "../Navbar/Navbar";
// import Navbar from "../Navbar/Navbar";
//Navbar Imports
import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <Navbar />
      <FilterDropDown />
    </Box>
  );
}

export default App;
