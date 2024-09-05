import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './basicselect.css';

const BasicSelect =()=> {
  const [age, setAge] = React.useState('in_stock');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <Box sx={{ minWidth: 120 }} className=" nme">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="input-label-mt">Stock status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"in_stock"} className="menu_name">In Stock</MenuItem>
          <MenuItem value={"out_of_stock"}  className="menu_name">Out of Stock</MenuItem>
       
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;