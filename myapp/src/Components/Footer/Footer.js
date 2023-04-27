import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import logo from "./soc_logo_360.png"

function Footer() {
  return (
    <Box
      id="footer"
      aria-label="footer-box"
      bgcolor={"#525252"}
      sx={{
        mt: "1em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: "3em",
      }}
    >
      <Box
        id="footer-logo"
        aria-label="school-of-code-footer-logo"
        sx={{ mr: '0.5em' }}>
      <figure>
        <img src={logo} alt="soc logo" sx={{ width: 100, height: 'auto' }} />
        </figure>
      </Box> 
      <Typography sx={{ color: "#FCF7F1" }}>2023 - School of Code</Typography>
    </Box>
  );
}

export default Footer;
