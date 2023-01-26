import { useState } from "react";
import axios from "axios";
import { Paper, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Repositories from "../Repositories/Repositories";
import { lightTheme, darkTheme } from "./Theme";
import "./App.scss";

// https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9

function App() {
  const [searchString, setSearchString] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper elevation={4}>
        <div className="App">
          <Header handleTheme={[isDarkMode, setIsDarkMode]} />
          <Form handleSearch={[searchString, setSearchString]} />
          <Repositories />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
