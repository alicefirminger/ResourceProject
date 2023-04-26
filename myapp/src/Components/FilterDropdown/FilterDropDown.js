import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
function FilterDropDown()
{
  return (
    <FormControl sx={{ mt: 2, width: 0.4
     }}>
      <InputLabel id="filter-menu">Select Category...</InputLabel>
      <Select
        labelId="filter-menu"
        id="filter-menu"
        value={''}
        label="Select Category..."
        onChange={'handleChange'}
      >
        <MenuItem value={""}>CSS</MenuItem>
        <MenuItem value={"react"}>React</MenuItem>
        <MenuItem value={"javascript"}>Javascript</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterDropDown;

