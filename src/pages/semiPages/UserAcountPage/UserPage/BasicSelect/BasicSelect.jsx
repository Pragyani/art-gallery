import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './basicselect.css';

const BasicSelect =()=> {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className=" nme">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="input-label-mt">stock option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"in_stock"}>In Stock</MenuItem>
          <MenuItem value={"out_of_stock"}>Out of Stock</MenuItem>
       
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;