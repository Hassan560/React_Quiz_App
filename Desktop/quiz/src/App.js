import "./App.css";
import Setting from "./Pages/Setting";
import Question from "./Pages/Question";
import FinalScreen from "./Pages/FinalScreen";
import { Route, Routes } from "react-router-dom";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={3}>
        <Routes>
          <Route path="/" element={<Setting />} />
          <Route path="question" element={<Question />} />
          <Route path="finalScreen" element={<FinalScreen />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
