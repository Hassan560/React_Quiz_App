import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import UseAxios from "../Hooks/UseAxios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../Redux/Action";

// random integer
const randomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

function Question() {
  // redux dispatch taking value
  const dispatch = useDispatch();

  // navigate
  const navigate = useNavigate();

  // redux useSelector giving value
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  // console.log(
  //   amount_of_question,
  //   question_category,
  //   question_difficulty,
  //   question_type,
  //   score
  // );

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  // custom hook
  const { response, loading } = UseAxios({ url: apiUrl });
  // console.log(response);

  // usestate to change question fields
  const [questionIndex, setQuestionIndex] = useState(0);

  // usestate to change option
  const [options, setOptions] = useState([]);
  // console.log(options);

  //useeffect to change option after update
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        randomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  // loading sign
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  // change anwer function
  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/finalScreen");
    }
  };
  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={4}>{response.results[questionIndex].question}</Typography>
      {options.map((elem, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {elem}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score}/{response.results.length}
      </Box>
    </Box>
  );
}

export default Question;
