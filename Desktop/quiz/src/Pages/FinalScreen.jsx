import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../Redux/Action";

function FinalScreen() {
  // dispatch
  const dispatch = useDispatch();

  // navigate to go back to quiz
  const navigate = useNavigate();

  // give value to finalscreen
  const { score } = useSelector((state) => state);

  // back to quiz function
  const backToQuizHandler = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/");
  };
  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={backToQuizHandler} variant="outlined">
        Back to Quiz
      </Button>
    </Box>
  );
}

export default FinalScreen;
