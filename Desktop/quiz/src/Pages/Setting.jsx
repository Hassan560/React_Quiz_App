import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SelectField from "../Component/SelectField";
import TextFieldCom from "../Component/TextFieldCom";
import UseAxios from "../Hooks/UseAxios";
import {useNavigate} from 'react-router-dom'

function Setting() {
  // setting form value function
  const submitSetFormValue = (e) => {
    e.preventDefault();
    navigate('/question')

  };
  //useNavigate 
  const navigate = useNavigate()

  //custom hooks
  const { response, error, loading } = UseAxios({ url: "/api_category.php" });
  console.log(response); 

  //loading sign
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  //error sign
  if (error) {
    return (
      <Box mt={20}>
        <Typography variant="h3" color="red" mt={20}>
          Something went wrong
        </Typography>
      </Box>
    );
  }

  // difficulty Option function
  const difficultyOption = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOption = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];
  return (
    <>
      <Box mt={3}>
        <Typography variant="h3">Quiz App</Typography>
      </Box>
      <form onSubmit={submitSetFormValue}>
        <SelectField options={response.trivia_categories} label="Category" />
        <SelectField options={difficultyOption} label="Difficulty" />
        <SelectField options={typeOption} label="Type" />
        <TextFieldCom />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
}

export default Setting;
