import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {useDispatch} from 'react-redux'
import { handleAmountChange } from "../Redux/Action";

function TextFieldCom() {
  // redux usedispatch taking value
  const dispatch = useDispatch()

  // taking form value function
  const getNumberValue = (e) => {
    dispatch(handleAmountChange(e.target.value))
  };
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth>
        <TextField
          onChange={getNumberValue}
          type="number"
          size="small"
          label="Amount of Questions"
          variant="outlined"
        />
      </FormControl>
    </Box>
  );
}

export default TextFieldCom;
