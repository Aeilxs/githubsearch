import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import { LinearProgress, Paper, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";
import "./App.scss";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Repositories from "../Repositories/Repositories";
import User from "../User/User";
import NotFound from "../NotFound/NotFound";

function App() {
  const [previousSearch, setPreviousSearch] = useState("");
  const [searchString, setSearchString] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userID, setUserID] = useState(0);
  const [page, setPage] = useState(1);
  const fetchRepos = () => {
    if (!searchString) return;
    setIsLoading(true);
    axios
      .get(
        `https://api.github.com/search/repositories?q=${searchString}&sort=stars&order=desc&page=1&per_page=9`
      )
      .then((res) => {
        setRepositories(res.data.items);
        setTotalResult(res.data.total_count);
        setPage(page + 1);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY >=
          document.body.scrollHeight - window.innerHeight - 200 &&
        !isLoading
      ) {
        const fetchMoreRepos = () => {
          if (window.location.href !== "http://localhost:3000/") return;
          setIsLoading(true);
          axios
            .get(
              `https://api.github.com/search/repositories?q=${previousSearch}&sort=stars&order=desc&page=${page}&per_page=9`
            )
            .then((res) => {
              setRepositories([...repositories, ...res.data.items]);
              setPage(page + 1);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
        };
        fetchMoreRepos();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousSearch, isLoading, page, repositories]);

  // fetch userInfo if change on userID
  useEffect(() => {
    if (!userID) return;
    setIsLoading(true);
    axios
      .get(`https://api.github.com/user/${userID}`)
      .then((res) => setUserInfo(res.data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [userID]);

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
                    setPage={setPage}
                    fetchRepos={fetchRepos}
                    isLoading={isLoading}
                    handleSearch={[searchString, setSearchString]}
                    setPreviousSearch={setPreviousSearch}
                  />
                  <Repositories
                    totalResult={totalResult}
                    repositories={repositories}
                  />
                  {isLoading && <LinearProgress />}
                </>
              }
            />
            <Route
              path="/utilisateur/:id"
              element={
                <User
                  id={userID}
                  setID={setUserID}
                  userInfo={userInfo}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
