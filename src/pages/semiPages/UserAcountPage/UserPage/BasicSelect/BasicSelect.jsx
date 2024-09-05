import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './basicselect.css';

const BasicSelect = ({ value, onChange }) => {
  return (
    <Box sx={{ minWidth: 120 }} className="nme">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="input-label-mt">Stock status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Stock status"
          onChange={(event) => onChange(event.target.value)}
        >
          <MenuItem value="In Stock" className="menu_name">In Stock</MenuItem>
          <MenuItem value="Out of Stock" className="menu_name">Out of Stock</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
