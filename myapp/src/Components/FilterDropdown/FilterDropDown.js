import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FilterDropDown(props) {
  // function makeAlert(value) {
  //   alert(`You clicked ${value}!`);
  // }

  return (
    <Box
      bgcolor={"#FCF7F1"}
      sx={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        component="div"
        sx={{
          flexGrow: 0,
          fontSize: "3rem",
          color: "#004777",
          fontWeight: "800",
          letterSpacing: "0.1em",
        }}
      >
        Resources
      </Typography>
      <FormControl sx={{ mt: 2, width: 0.4 }}>
        <InputLabel id="filter-menu">Select Topic</InputLabel>
        <Select
          sx={{
            borderColor: "red",
            backgroundColor: "white",
          }}
          labelId="filter-menu"
          id="filter-menu"
          value={props.value}
          label="Select Topic"
          onChange={props.onChange}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"css"}>CSS</MenuItem>
          <MenuItem value={"react"}>React</MenuItem>
          <MenuItem value={"git"}>Git</MenuItem>
          <MenuItem value={"UI/UX"}>UI/UX</MenuItem>
          <MenuItem value={"testing"}>Testing</MenuItem>
          <MenuItem value={"javascript"}>Javascript</MenuItem>
          <MenuItem value={"mindset"}>Mindset</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterDropDown;
