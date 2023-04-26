import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function FilterDropDown(props)
{

  function makeAlert(value) {
    alert(`You clicked ${value}!`);
  }

  return (
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
  );
}

export default FilterDropDown;