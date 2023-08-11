import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ResourceBar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        bgcolor: "#004777",
        height: isMobile ? "7em" : "10em",
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
