import { useState } from "react";
import { Paper, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Repositories from "../Repositories/Repositories";
import { lightTheme, darkTheme } from "./Theme";
import "./App.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper elevation={4}>
        <div className="App">
          <Header handleTheme={[isDarkMode, setIsDarkMode]} />
          <Form />
          <Repositories />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
