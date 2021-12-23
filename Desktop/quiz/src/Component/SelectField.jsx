import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../Redux/Action";

function SelectField({ label, options }) {
  // useState
  const [Value, setValue] = useState("");

  // useDispatch taking value with redux
  const dispatch = useDispatch();

  //taking form value function
  const getInputValue = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small" required>
        <InputLabel>{label}</InputLabel>
        <Select label={label} value={Value} onChange={getInputValue}>
          {options.map(({ name, id }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectField;
