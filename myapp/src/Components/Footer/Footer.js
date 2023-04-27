import { Box } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
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
      <a
        href="https://github.com/SchoolOfCode/bc14_w7_project-frontend-room-20-reactivists"
        alt="GitHub Icon"
      >
        <GitHubIcon sx={{ color: "#FCF7F1", mr: "0.5em" }} />
      </a>
      <Typography sx={{ color: "#FCF7F1" }}>2023 - School of Code</Typography>
    </Box>
  );
}

export default Footer;
