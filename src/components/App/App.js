import { useState } from "react";
import axios from "axios";
import { Paper, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Repositories from "../Repositories/Repositories";
import { lightTheme, darkTheme } from "./Theme";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

// https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9

function App() {
  const [searchString, setSearchString] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  const fetchRepos = () => {
    setIsLoading(true);
    const url = `https://api.github.com/search/repositories?q=${searchString}&sort=stars&order=desc&page=1&per_page=9`;
    axios
      .get(url)
      .then((res) => {
        setRepositories(res.data.items);
        setTotalResult(res.data.total_count);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper elevation={4}>
        <div className="App">
          <Header handleTheme={[isDarkMode, setIsDarkMode]} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Form
                    fetchRepos={fetchRepos}
                    isLoading={isLoading}
                    handleSearch={[searchString, setSearchString]}
                  />
                  <Repositories
                    totalResult={totalResult}
                    repositories={repositories}
                  />
                </>
              }
            />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
