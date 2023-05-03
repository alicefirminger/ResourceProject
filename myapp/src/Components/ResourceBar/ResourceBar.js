import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ResourceBar(props) {
  return (
    <Box
      sx={{
        bgcolor: "#004777",
        height: "10em",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#FCF7F1",
          ml: "1em",
          fontWeight: "300",
          fontSize: "2em",
        }}
      >
        {props.results} Result(s)
      </Typography>
    </Box>
  );
}

export default ResourceBar;
