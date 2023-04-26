import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FilterDropDown(props) {
  function makeAlert(value) {
    alert(`You clicked ${value}!`);
  }

  return (
    <Box
      bgcolor={"#FCF7F1"}
      sx={{ height: "200px" }}
    >
      <Typography
        variant="h1"
        component="div"
        sx={{ flexGrow: 0, fontSize: "1rem", color: "#004777" }}
      >
        Resources
      </Typography>
      <FormControl sx={{ mt: 2, width: 0.4 }}>
        <InputLabel id="filter-menu">Select Category</InputLabel>
        <Select
          // labelId="filter-menu"
          // id="filter-menu"
          // value={""}
          label="Select Category"
          onChange={(event) => makeAlert(event.target.value)}
        >
          <MenuItem value={"css"}>CSS</MenuItem>
          <MenuItem value={"react"}>React</MenuItem>
          <MenuItem value={"javascript"}>Javascript</MenuItem>
          <MenuItem value={"mindset"}>Mindset</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterDropDown;
