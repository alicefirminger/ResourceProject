import React from "react";
import "./App.css";
import FilterDropDown from "../FilterDropdown/FilterDropDown";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import ResourceListDisplay from "../ResourceList/ResourceList";
import { resource } from "../Resource/Resource";

function App() {
  return (
    <Box>
      <Navbar />
      <FilterDropDown />
      <ResourceListDisplay resource={resource} />
    </Box>
  );

export default App;
