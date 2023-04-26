import React from "react";
import "./App.css";
import FilterDropDown from "../FilterDropdown/FilterDropDown";
//Navbar Imports
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1, fontSize: "1rem" }}
          >
            Bootcamper's Treasure Chest
          </Typography>
          <FacebookRoundedIcon sx={{ mr: 1 }} />
          <LinkedInIcon sx={{ mr: 1 }} />
          <GitHubIcon sx={{ mr: 1 }} />
        </Toolbar>
      </AppBar>

      <Box>
        <FilterDropDown />
      </Box>
    </Box>
  );
}

  export default App;