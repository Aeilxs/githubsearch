import { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

function Form({
  handleSearch,
  isLoading,
  fetchRepos,
  setPreviousSearch,
  setPage,
}) {
  const [elevation, setElevation] = useState(1);
  const [searchString, setSearchString] = handleSearch;
  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    setPreviousSearch(searchString);
    setSearchString("");
    fetchRepos();
  };

  return (
    <Paper
      elevation={elevation}
      component="form"
      onSubmit={(event) => handleSubmit(event)}
      sx={{
        p: "2px 4px",
        display: "flex",
        width: "100%",
        marginBottom: "1rem",
      }}
    >
      <InputBase
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Recherchez un repo sur GitHub"
        onFocus={() => setElevation(5)}
        onBlur={() => setElevation(1)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        {isLoading ? <CircularProgress size={24} /> : <SearchIcon />}
      </IconButton>
    </Paper>
  );
}

Form.propTypes = {
  handleSearch: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.func.isRequired,
    ])
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchRepos: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Form;
